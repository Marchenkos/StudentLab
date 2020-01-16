import changeSearchTerms from "../../reducers/changeSearchTermsReducer";
import { ENTER_CITY_NAME, CHANGE_MODE } from "../../actions/searchWeatherActions";

const { describe, it, expect } = global;

describe("Reducer for change search terms", () => {
    const initialState = {
        cityName: null,
        searchMode: "Now"
    };

    it("Get a city name", () => {
        const cityName = "Minsk";
        const expectedCityName = "Minsk";
        const action = {
            type: ENTER_CITY_NAME,
            value: cityName
        };

        expect(changeSearchTerms(initialState, action)).toEqual({
            ...initialState,
            cityName: expectedCityName
        });
    });

    it("Get a search mode", () => {
        const searchMode = "Today";
        const expectedMode = "Today";
        const action = {
            type: CHANGE_MODE,
            value: searchMode
        };

        expect(changeSearchTerms(initialState, action)).toEqual({
            ...initialState,
            searchMode: expectedMode
        });
    });
});
