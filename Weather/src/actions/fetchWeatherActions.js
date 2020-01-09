export const FETCH_WEATHER_REQUEST_NOW = "FETCH_WEATHER_REQUEST_NOW";
export const FETCH_WEATHER_REQUEST_TODAY = "FETCH_WEATHER_REQUEST_TODAY";
export const FETCH_WEATHER_REQUEST_FOR_WEEK = "FETCH_WEATHER_REQUEST_FOR_WEEK";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

export const fetchWeatherRequestNow = () => {
    return {
        type: FETCH_WEATHER_REQUEST_NOW
    };
};

export const fetchWeatherRequestToday = () => {
    return {
        type: FETCH_WEATHER_REQUEST_TODAY
    };
};

export const fetchWeatherRequestForWeek = () => {
    return {
        type: FETCH_WEATHER_REQUEST_FOR_WEEK
    };
};

export const fetchUserSuccess = result => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        result
    };
};

export const fetchUserError = errorMessage => {
    return {
        type: FETCH_WEATHER_ERROR,
        errorMessage
    };
};
