import { filterInformation, groupInformation } from "../../additionalFunctions/convertData";
import { NOW, TODAY } from "../../constants";

const { describe, it, expect } = global;

describe("Test for functions that convert data", () => {
    it("Function should return object in accordance with the arguments passed", () => {
        const list = {
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
        const { temp, feels_like, humidity, pressure } = list.main;
        const expectedOutput = {
            modeIsNow: {
                tempetature: Math.floor(temp),
                feelsLike: feels_like,
                humidity,
                pressure,
                wind: list.wind.speed,
                weather: list.weather[0].descripton,
                icon: list.weather[0].icon
            },
            modeIsNotNow: {
                tempetature: Math.floor(temp),
                feelsLike: feels_like,
                date: list.dt_txt.slice(0, 10),
                time: list.dt_txt.slice(11, 16),
                humidity,
                pressure,
                wind: list.wind.speed,
                weather: list.weather[0].descripton,
                icon: list.weather[0].icon
            },
        };

        [{ mode: NOW, expectedResult: expectedOutput.modeIsNow },
            { mode: TODAY, expectedResult: expectedOutput.modeIsNotNow }
        ].forEach(({ mode, expectedResult }) => {
            expect(filterInformation(list, mode)).toEqual(expectedResult);
        });
    });

    it("Function should return array without repeating element", () => {
        const inputValue = [
            {
                item: "first",
                date: "02.03.20"
            },
            {
                item: "second",
                date: "02.03.20"
            },
            {
                item: "third",
                date: "03.03.20"
            },
            {
                item: "fourth",
                date: "03.03.20"
            },
            {
                item: "fifth",
                date: "02.05.20"
            }
        ];
        const outputValue = [
            [
                { item: "first", date: "02.03.20" },
                { item: "second", date: "02.03.20" }
            ],
            [
                { item: "third", date: "03.03.20" },
                { item: "fourth", date: "03.03.20" }
            ],
            [
                { item: "fifth", date: "02.05.20" }
            ]
        ];

        expect(groupInformation(inputValue)).toEqual(outputValue);
    });
});
