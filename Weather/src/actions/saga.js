import { takeLatest, call, put, select } from "redux-saga/effects";
import { FETCH_WEATHER_REQUEST, fetchUserSuccess, fetchUserError } from "./fetchWeatherAction";
import { selectCityName } from "../selectors/selector";

const APIkey = "7e3d24dcd28adb946abe1b502b8a5df8";

const getDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

    return `${date.getFullYear()}-${month}-${day}`;
};

const filterInformation = list => {
    const { temp, feels_like, humidity, pressure } = list.main;

    return {
        tempetature: temp,
        date: list.dt_txt,
        feelsLike: feels_like,
        humidity,
        pressure,
        wind: list.wind.speed,
        weather: list.weather[0].descripton
    };
};

export function* fetchWeatherNow() {
    try {
        const cityName = yield select(selectCityName);

        if (cityName) {
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&units=metric&APPID=${APIkey}`;

            const response = yield call(() => {
                return fetch(weatherURL)
                    .then(res => res.json())
                    .then(data => {
                        return data;
                    });
            });

            yield put(fetchUserSuccess(filterInformation(response)));
        }
    } catch (error) {
        const message = "Fall out";

        yield put(fetchUserError(message));
    }
}

export function* fetchWeatherToday() {
    try {
        const cityName = yield select(selectCityName);
        const currentDate = getDate();

        if (cityName) {
            const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ru&units=metric&APPID=${APIkey}`;

            const response = yield call(() => {
                return fetch(weatherURL)
                    .then(res => res.json())
                    .then(data => {
                        const dailyData = data.list.filter(reading => reading.dt_txt.includes(currentDate));
                        const countResult = dailyData.length;

                        if (countResult < 3) {
                            for (let i = countResult; i < 3; i++) {
                                dailyData.push(data.list[i]);
                            }
                        }

                        return dailyData;
                    });
            });

            const result = response.map(item => filterInformation(item));

            yield put(fetchUserSuccess(result));
        }
    } catch (error) {
        const message = "Fall out";
        yield put(fetchUserError(message));
    }
}

export function* fetchWeatherForWeek() {
    try {
        const cityName = yield select(selectCityName);

        if (cityName) {
            const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ru&units=metric&APPID=${APIkey}`;

            const response = yield call(() => {
                return fetch(weatherURL)
                    .then(res => res.json())
                    .then(data => {
                        return data;
                    });
            });

            const result = response.list.map(item => filterInformation(item));

            yield put(fetchUserSuccess(result));
        }
    } catch (error) {
        const message = "Fall out";
        yield put(fetchUserError(message));
    }
}

export default function* usersSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherNow);
}
