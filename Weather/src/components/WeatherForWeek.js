import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import MainBlockWeather from "./MainBlockWeather";
import AdditionalBockWeather from "./AdditionalBockWeather";
import { ContentBlock } from "../style/contentStyle";
import { Headers, HeaderItem } from "../style/headersStyle";

export default function WeatherForWeek({ result, cityName }) {
    const [currentWeather, setCurrentWeather] = useState(result[0]);
    const [currentDay, setCurrentDay] = useState("");
    const [daysOfTheWeek, setDaysOfTheWeek] = useState([]);
    const [detailInformation, setDetailInformation] = useState({});
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        if (!result) {
            setIsLoad(false);
        } else {
            setIsLoad(true);
        }
    }, [result]);

    useEffect(() => {
        const listOfDays = [];

        if (result.length > 0) {
            result.map(item => {
                item.map(data => {
                    !listOfDays.includes(moment(data.date, "YYYY-MM-DD").format("dddd"))
                        ? listOfDays.push(moment(data.date, "YYYY-MM-DD").format("dddd"))
                        : null;
                });
            });
        }

        setDaysOfTheWeek(listOfDays);
        setCurrentDay(listOfDays[0]);
    }, [result]);

    useEffect(() => {
        setDetailInformation(currentWeather[0]);
    }, [currentWeather]);

    useEffect(() => {
        const indexWeather = daysOfTheWeek.indexOf(currentDay);

        if (indexWeather !== -1) {
            setCurrentWeather(result[indexWeather]);
        }
    }, [currentDay]);

    const chooseDay = e => {
        setCurrentDay(e.target.value);
    };

    const changeDetailInformation = useCallback(index => {
        setDetailInformation(currentWeather[index]);
    }, [currentWeather]);

    return (
        isLoad ? (
            <>
                <Headers>
                    {
                        daysOfTheWeek.map((day, index) => {
                            return (
                                <HeaderItem key={index} onClick={chooseDay} value={day} active={day === currentDay}>
                                    {day}
                                </HeaderItem>
                            );
                        })
                    }
                </Headers>
                <ContentBlock complex>
                    <MainBlockWeather listOfData={detailInformation} cityName={cityName} />
                    <AdditionalBockWeather listOfData={currentWeather} changeDetailInformation={changeDetailInformation} />
                </ContentBlock>
            </>
        ) : null
    );
}
