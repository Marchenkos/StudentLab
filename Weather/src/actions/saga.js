import { takeLatest, call, put } from "redux-saga";
import { FETCH_WEATHER_REQUEST, fetchUserSuccess, fetchUserError } from "./fetchWeatherAction";

export function* fetchWeather() {
    const APIkey = "7e3d24dcd28adb946abe1b502b8a5df8";
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=${APIkey}`;
    try {
        const response = yield call(() => {
            fetch(weatherURL)
                .then(res => res.json());
        });
        yield put(fetchUserSuccess(response));

    } catch (error) {
        const message = "Fall out";
        yield put(fetchUserError(message));
    }
}

export default function* usersSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}
