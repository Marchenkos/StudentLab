import React, { useState, useEffect } from "react";
import moment from "moment";
import { Information, Img, InformationBlock, TodayBlock, InformationBlockItem } from "../style/contentStyle";
import { WeatherHeaders, HeaderItem } from "../style/weatherForWeekStyle";
import weatherIcon from "../../img/weatherImg/rainSun.png";

export function WeatherForWeek({ result, cityName }) {
    const [currentWeather, setCurrentWeather] = useState(result[0]);
    const [days, setDays] = useState([]);
    const [currentDay, setCurrentDay] = useState("");

    useEffect(() => {
        const listOfDays = [];
        moment.locale("en");

        if (result) {
            result.map(item => {
                item.map(data => {
                    !listOfDays.includes(moment(data.date, "YYYY-MM-DD").format("dddd"))
                        ? listOfDays.push(moment(data.date, "YYYY-MM-DD").format("dddd"))
                        : null;
                });
            });
        }

        setDays(listOfDays);
        setCurrentDay(listOfDays[0]);
    }, [result]);

    const chooseDay = e => {
        setCurrentDay(e.target.value);
    };

    useEffect(() => {
        const indexWeather = days.indexOf(currentDay);

        if (indexWeather !== -1) {
            setCurrentWeather(result[indexWeather]);
        }
    }, [currentDay]);

    const { tempetature, feelsLike, humidity, pressure, wind, weather } = currentWeather[0];

    return (
        result && days.length > 0 ? (
            <>
                <WeatherHeaders>
                    {
                        days.map((day, index) => {
                            return day === currentDay ? <HeaderItem key={index} onClick={chooseDay} value={day} active>{day}</HeaderItem>
                                : <HeaderItem key={index} value={day} onClick={chooseDay}>{day}</HeaderItem>;
                        })
                    }
                </WeatherHeaders>
                <TodayBlock complex>
                    <InformationBlock block="main">
                        <InformationBlockItem>
                            <Img block="main" src={weatherIcon} />
                            <Information bold>{tempetature}</Information>
                            <Information bold={false}>
                            Real feel:
                                {feelsLike}
                            </Information>
                            <Information bold>{weather}</Information>
                        </InformationBlockItem>
                        <InformationBlockItem>
                            <Information bold>{cityName}</Information>
                            <Information bold={false}>
                            Humidity 
                                {humidity}
                            </Information>
                            <Information bold={false}>
                            Pressure 
                                {pressure}
                            </Information>
                            <Information bold={false}>
                            Wind speed 
                                {wind}
                            </Information>
                        </InformationBlockItem>
                    </InformationBlock>
                    <InformationBlock complex>
                        {
                            currentWeather.map(item => {
                                return (
                                    <InformationBlockItem active>
                                        <Information bold={false}>{item.time}</Information>
                                        <Img block="additional" src={weatherIcon} />
                                        <Information bold={false}>{item.tempetature}</Information>
                                    </InformationBlockItem>
                                );
                            })
                        }
                    </InformationBlock>
                </TodayBlock>
            </>
        ) : null
    );
}
