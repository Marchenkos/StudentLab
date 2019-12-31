export const ENTER_CITY_NAME = "ENTER_CITY_NAME";
export const CHANGE_MODE = "CHANGE_MODE";

export const enterCityName = name => {
    return {
        type: ENTER_CITY_NAME,
        value: name
    };
};

export const changeMode = mode => {
    return {
        type: CHANGE_MODE,
        value: mode
    };
};
