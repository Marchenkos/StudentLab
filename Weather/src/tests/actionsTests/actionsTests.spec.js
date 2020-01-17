import * as changeResultActions from "../../actions/changeResultActions";
import * as fetchWeatherActions from "../../actions/fetchWeatherActions";
import * as searchWeatherActions from "../../actions/searchWeatherActions";

describe("Test for creating an action", () => {
    it("CLEAR_RESULT action creates correctly", () => {
        const expectedAction = {
            type: changeResultActions.CLEAR_RESULT,
        };

        expect(changeResultActions.clearResult()).toEqual(expectedAction);
    });

    it("FETCH_WEATHER_REQUEST_NOW action creates correctly", () => {
        const expectedAction = {
            type: fetchWeatherActions.FETCH_WEATHER_REQUEST_NOW,
        };

        expect(fetchWeatherActions.fetchWeatherRequestNow()).toEqual(expectedAction);
    });

    it("FETCH_WEATHER_REQUEST_TODAY action creates correctly", () => {
        const expectedAction = {
            type: fetchWeatherActions.FETCH_WEATHER_REQUEST_TODAY,
        };

        expect(fetchWeatherActions.fetchWeatherRequestToday()).toEqual(expectedAction);
    });

    it("FETCH_WEATHER_REQUEST_FOR_WEEK action creates correctly", () => {
        const expectedAction = {
            type: fetchWeatherActions.FETCH_WEATHER_REQUEST_FOR_WEEK,
        };

        expect(fetchWeatherActions.fetchWeatherRequestForWeek()).toEqual(expectedAction);
    });

    it("FETCH_WEATHER_SUCCESS action creates correctly", () => {
        const expectedAction = {
            type: fetchWeatherActions.FETCH_WEATHER_SUCCESS,
        };

        expect(fetchWeatherActions.fetchUserSuccess()).toEqual(expectedAction);
    });

    it("FETCH_WEATHER_ERROR action creates correctly", () => {
        const expectedAction = {
            type: fetchWeatherActions.FETCH_WEATHER_ERROR,
        };

        expect(fetchWeatherActions.fetchUserError()).toEqual(expectedAction);
    });

    it("CHANGE_MODE action creates correctly", () => {
        const expectedAction = {
            type: searchWeatherActions.CHANGE_MODE,
        };

        expect(searchWeatherActions.changeMode()).toEqual(expectedAction);
    });

    it("ENTER_CITY_NAME action creates correctly", () => {
        const expectedAction = {
            type: searchWeatherActions.ENTER_CITY_NAME,
        };

        expect(searchWeatherActions.enterCityName()).toEqual(expectedAction);
    });
});
