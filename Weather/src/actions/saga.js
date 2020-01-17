import "regenerator-runtime/runtime";
import { takeLatest, call, put, select } from "redux-saga/effects";
import moment from "moment";
import { getWeatherNow, getWeatherToday, getWeatherForWeek } from "../API/fetchWeather";
import { FETCH_WEATHER_REQUEST_NOW,
    FETCH_WEATHER_REQUEST_TODAY,
    FETCH_WEATHER_REQUEST_FOR_WEEK,
    fetchUserSuccess, fetchUserError } from "./fetchWeatherActions";
import { selectCityNameSelector, selectSearchModeSelector } from "../selectors/selector";
import { filterInformation, groupInformation } from "../additionalFunctions/convertData";
import { MAX_RESULT } from "../constants";

export function* fetchWeatherNow() {
    try {
        const cityName = yield select(selectCityNameSelector);
        const searchMode = yield select(selectSearchModeSelector);

        if (cityName) {
            const response = yield call(getWeatherNow, cityName);

            yield put(fetchUserSuccess(filterInformation(response, searchMode.toLowerCase())));
        }
    } catch (error) {
        const { message } = error;

        yield put(fetchUserError(message));
    }
}

export function* fetchWeatherToday() {
    try {
        const cityName = yield select(selectCityNameSelector);

        const now = moment();
        const currentDate = now.format("YYYY-MM-DD");

        if (cityName) {
            const response = yield call(getWeatherToday, cityName, currentDate, MAX_RESULT);
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
        const cityName = yield select(selectCityNameSelector);
        const searchMode = yield select(selectSearchModeSelector);

        if (cityName) {
            const response = yield call(getWeatherForWeek, cityName);
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
