import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import * as matchers from "redux-saga-test-plan/matchers";
import { MAX_RESULT, NOW, FIVE_DAYS } from "../../constants";
import { filterInformation, groupInformation } from "../../additionalFunctions/convertData";
import getWeatherSaga from "../../actions/saga";
import { getWeatherNow, getWeatherToday, getWeatherForWeek } from "../../API/fetchWeather";
import fetchWeather from "../../reducers/fetchWeatherReducer";
import { selectCityNameSelector, selectSearchModeSelector } from "../../selectors/selector";
import { fetchWeatherRequestNow, fetchWeatherRequestToday, fetchWeatherRequestForWeek } from "../../actions/fetchWeatherActions";

describe("Test for saga middleware ", () => {
    const cityName = "London";

    it("It should returns the current weather result", async () => {
        const fetchResult = {
            main: {
                temp: "11.55",
                feelsLike: "11",
                humidity: "1000",
                pressure: "2000"
            },
            dt_txt: "11-02-2000 15:00:00",
            wind: {
                speed: 100,
            },
            weather: [
                {
                    descripton: "weather",
                    icon: "icon"
                }
            ]
        };
        const expectedResult = filterInformation(fetchResult, NOW);

        const saga = expectSaga(getWeatherSaga)
            .provide([
                [matchers.select.selector(selectCityNameSelector), cityName],
                [matchers.select.selector(selectSearchModeSelector), NOW],
                [matchers.call.fn(getWeatherNow, cityName), fetchResult]
            ])
            .withReducer(fetchWeather);

        const result = await saga
            .dispatch(fetchWeatherRequestNow())
            .silentRun();
        
        expect(result.storeState.result).toStrictEqual(expectedResult);
    });

    it("It should returns daily weather result", async () => {
        const fetchResult = [{
            main: {
                temp: "11.55",
                feelsLike: "11",
                humidity: "1000",
                pressure: "2000"
            },
            dt_txt: "11-02-2000 15:00:00",
            wind: {
                speed: 100,
            },
            weather: [
                {
                    descripton: "weather",
                    icon: "icon"
                }
            ]
        }];
        const expectedResult = fetchResult.map(item => filterInformation(item));
        const currentDate = "2020-01-31";

        const saga = expectSaga(getWeatherSaga)
            .provide([
                [matchers.select.selector(selectCityNameSelector), cityName],
                [matchers.call.fn(getWeatherToday, cityName, currentDate, MAX_RESULT), fetchResult]
            ])
            .withReducer(fetchWeather);

        const result = await saga
            .dispatch(fetchWeatherRequestToday())
            .silentRun();
        
        expect(result.storeState.result).toStrictEqual(expectedResult);
    });

    it("It should returns weather result for a week", async () => {
        const fetchResult = {
            list: [{
                main: {
                    temp: "11.55",
                    feelsLike: "11",
                    humidity: "1000",
                    pressure: "2000"
                },
                dt_txt: "11-02-2000 15:00:00",
                
                wind: {
                    speed: 100,
                },
                weather: [
                    {
                        descripton: "weather",
                        icon: "icon"
                    }
                ]
            }]
        };
        let expectedResult = fetchResult.list.map(item => filterInformation(item));
        expectedResult = groupInformation(expectedResult, FIVE_DAYS);

        const saga = expectSaga(getWeatherSaga)
            .provide([
                [matchers.select.selector(selectCityNameSelector), cityName],
                [matchers.select.selector(selectSearchModeSelector), FIVE_DAYS],
                [matchers.call.fn(getWeatherForWeek, cityName), fetchResult]
            ])
            .withReducer(fetchWeather);

        const result = await saga
            .dispatch(fetchWeatherRequestForWeek())
            .silentRun();
        
        expect(result.storeState.result).toStrictEqual(expectedResult);
    });

    it("It should return error ", async () => {
        const errorMessage = "error";
        const error = new Error(errorMessage);

        const saga = expectSaga(getWeatherSaga)
            .provide([
                [matchers.select.selector(selectCityNameSelector), cityName],
                [matchers.select.selector(selectSearchModeSelector), NOW],
                [matchers.call.fn(getWeatherNow, cityName), throwError(error)],
            ])
            .withReducer(fetchWeather);

        const result = await saga
            .dispatch(fetchWeatherRequestNow())
            .silentRun();

        expect(result.storeState.error).toBe(errorMessage);
    });
});
