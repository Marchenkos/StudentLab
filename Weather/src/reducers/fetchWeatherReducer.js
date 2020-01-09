import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from "../actions/fetchWeatherActions";
import { CLEAR_RESULT } from "../actions/changeResultActions";

export const defaultState = {
    result: null,
    error: null
};

export default function fetchWeather(state = defaultState, action) {
    switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
        return {
            ...state,
            result: action.result
        };
    case FETCH_WEATHER_ERROR:
        return {
            ...state,
            error: action.errorMessage
        };
    case CLEAR_RESULT:
        return {
            ...state,
            result: null
        };
    default:
        return state;
    }
}
