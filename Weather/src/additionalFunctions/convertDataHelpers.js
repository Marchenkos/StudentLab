import groupby from "lodash.groupby";
import { NOW } from "../constants";

export const filterInformation = (list, mode) => {
    const { temp, feels_like, humidity, pressure } = list.main;

    return mode !== NOW
        ? {
            tempetature: Math.floor(temp),
            date: list.dt_txt.slice(0, 10),
            time: list.dt_txt.slice(11, 16),
            feelsLike: feels_like,
            humidity,
            pressure,
            wind: list.wind.speed,
            weather: list.weather[0].descripton,
            icon: list.weather[0].icon
        }
        : {
            tempetature: Math.floor(temp),
            feelsLike: feels_like,
            humidity,
            pressure,
            wind: list.wind.speed,
            weather: list.weather[0].descripton,
            icon: list.weather[0].icon
        };
};

export const groupInformation = list => {
    const resultObject = groupby(list, "date");

    return Object.values(resultObject);
};
