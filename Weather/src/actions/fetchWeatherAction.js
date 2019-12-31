export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

export const fetchUserRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    };
};

export const fetchUserSuccess = result => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        result
    };
};

export const fetchUserError = message => {
    return {
        type: FETCH_WEATHER_ERROR,
        message
    };
};
