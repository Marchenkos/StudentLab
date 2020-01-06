import { takeLatest, call, put, select } from "redux-saga/effects";
import moment from "moment";
import { FETCH_WEATHER_REQUEST_NOW, FETCH_WEATHER_REQUEST_TODAY, FETCH_WEATHER_REQUEST_FOR_WEEK, fetchUserSuccess, fetchUserError } from "./fetchWeatherAction";
import { selectCityName } from "../selectors/selector";

const APIkey = "7e3d24dcd28adb946abe1b502b8a5df8";

const filterInformation = list => {
    const { temp, feels_like, humidity, pressure } = list.main;

    return {
        tempetature: temp,
        date: list.dt_txt.slice(0, 10),
        time: list.dt_txt.slice(11),
        feelsLike: feels_like,
        humidity,
        pressure,
        wind: list.wind.speed,
        weather: list.weather[0].descripton
    };
};

const groupInformation = list => {
    let group = [];
    const result = [];
    let currentDate = list[0].date;

    list.map(item => {
        if (item.date === currentDate) {
            group.push(item);
        } else {
            currentDate = item.date;
            result.push(group);
            group = [];
        }
    });

    return result;
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
        const { message } = error;

        yield put(fetchUserError(message));
    }
}

export function* fetchWeatherToday() {
    try {
        const cityName = yield select(selectCityName);
        const now = moment();
        const currentDate = now.format("YYYY-MM-DD");

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
        const { message } = error;

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
            const groupResult = groupInformation(result);

            yield put(fetchUserSuccess(groupResult));
        }
    } catch (error) {
        const { message } = error;

        yield put(fetchUserError(message));
    }
}

export default function* usersSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST_NOW, fetchWeatherNow);
    yield takeLatest(FETCH_WEATHER_REQUEST_TODAY, fetchWeatherToday);
    yield takeLatest(FETCH_WEATHER_REQUEST_FOR_WEEK, fetchWeatherForWeek);
}
