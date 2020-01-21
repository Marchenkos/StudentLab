import { ENTER_CITY_NAME, CHANGE_MODE } from "../actions/searchWeatherActions";

export const defaultState = {
    cityName: null,
    searchMode: "Now"
};

export default function changeSearchTerms(state = defaultState, action) {
    switch (action.type) {
    case ENTER_CITY_NAME:
        return {
            ...state,
            cityName: action.value
        };
    case CHANGE_MODE:
        return {
            ...state,
            searchMode: action.value
        };
    default:
        return state;
    }
}
