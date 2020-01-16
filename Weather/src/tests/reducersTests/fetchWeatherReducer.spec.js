import fetchWeather from "../../reducers/fetchWeatherReducer";
import { CLEAR_RESULT } from "../../actions/changeResultActions";
import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from "../../actions/fetchWeatherActions";

const { describe, it, expect } = global;

describe("Reducer for change result", () => {
    const initialState = {
        result: null,
        error: null
    };

    it("Get a result of search", () => {
        const result = [];
        const expectedResult = [];
        const action = {
            type: FETCH_WEATHER_SUCCESS,
            result
        };

        expect(fetchWeather(initialState, action)).toEqual({
            ...initialState,
            result: expectedResult
        });
    });

    it("Get an error", () => {
        const errorMessage = "404";
        const expectedError = "404";
        const action = {
            type: FETCH_WEATHER_ERROR,
            errorMessage
        };

        expect(fetchWeather(initialState, action)).toEqual({
            ...initialState,
            error: expectedError
        });
    });

    it("Clear result", () => {
        const expectedResult = null;
        const action = {
            type: CLEAR_RESULT
        };

        expect(fetchWeather(initialState, action)).toEqual({
            ...initialState,
            result: expectedResult
        });
    });
});
