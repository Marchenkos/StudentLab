import { takeLatest, call, put, select } from "redux-saga/effects";
import moment from "moment";
import { FETCH_WEATHER_REQUEST_NOW,
    FETCH_WEATHER_REQUEST_TODAY,
    FETCH_WEATHER_REQUEST_FOR_WEEK,
    fetchUserSuccess, fetchUserError } from "./fetchWeatherActions";
import { selectCityNameSelector, selectSearchModeSelector } from "../selectors/selector";
import { filterInformation, groupInformation } from "../convertData";

const APIkey = "7e3d24dcd28adb946abe1b502b8a5df8";
const maxResult = 3;

export function* fetchWeatherNow() {
    try {
        const cityName = yield select(selectCityNameSelector);
        const searchMode = yield select(selectSearchModeSelector);

        if (cityName) {
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&units=metric&APPID=${APIkey}`;

            const response = yield call(() => {
                return fetch(weatherURL)
                    .then(res => res.json())
                    .then(data => {
                        return data;
                    });
            });

            yield put(fetchUserSuccess(filterInformation(response, searchMode)));
        }
    } catch (error) {
        const { message } = error;

        yield put(fetchUserError(message));
    }
}

export function* fetchWeatherToday() {
    try {
        const cityName = yield select(selectCityNameSelector);
        const searchMode = yield select(selectSearchModeSelector);

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

                        if (countResult < maxResult) {
                            for (let i = countResult; i < maxResult; i++) {
                                dailyData.push(data.list[i]);
                            }
                        }

                        return dailyData;
                    });
            });

            const result = response.map(item => filterInformation(item));

            yield put(fetchUserSuccess(result, searchMode));
        }
    } catch (error) {
        const { message } = error;

        yield put(fetchUserError(message));
    }
}

export function* fetchWeatherForWeek() {
    try {
        const cityName = yield select(selectCityNameSelector);
        const searchMode = yield select(selectSearchModeSelector);

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
            const groupResult = groupInformation(result, searchMode);

            yield put(fetchUserSuccess(groupResult));
        }
    } catch (error) {
        const { message } = error;

        yield put(fetchUserError(message));
    }
}

export default function* getWeatherSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST_NOW, fetchWeatherNow);
    yield takeLatest(FETCH_WEATHER_REQUEST_TODAY, fetchWeatherToday);
    yield takeLatest(FETCH_WEATHER_REQUEST_FOR_WEEK, fetchWeatherForWeek);
}
