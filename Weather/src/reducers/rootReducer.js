import { CLEAR_RESULT } from "../actions/changeResultAction";
import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from "../actions/fetchWeatherAction";
import { ENTER_CITY_NAME, CHANGE_MODE } from "../actions/searchWeatherAction";

export const defaultState = {
    cityName: "",
    mode: "",
    result: null,
    error: null
};

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
    case ENTER_CITY_NAME:
        return {
            ...state,
            cityName: action.value
        };
    case CHANGE_MODE:
        return {
            ...state,
            mode: action.value
        };
    case FETCH_WEATHER_SUCCESS:
        return {
            ...state,
            result: action.result
        };
    case FETCH_WEATHER_ERROR:
        return {
            ...state,
            error: action.message
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
