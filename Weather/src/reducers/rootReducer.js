import { combineReducers } from "redux";
import changeSearchTerms from "./changeSearchTermsReducer";
import fetchWeather from "./fetchWeatherReducer";

export default combineReducers({
    changeSearchTerms,
    fetchWeather
});
