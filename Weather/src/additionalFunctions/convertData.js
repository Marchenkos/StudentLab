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
    const result = [];
    let group = [];
    let currentDate = list[0].date;

    list.map(item => {
        if (item.date === currentDate) {
            group.push(item);
        } else {
            currentDate = item.date;
            result.push(group);
            group = [];
        }
    });

    return result;
};
