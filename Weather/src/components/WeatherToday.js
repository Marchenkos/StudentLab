import React, { useState, useEffect, useCallback } from "react";
import MainBlockWeather from "./MainBlockWeather";
import AdditionalBockWeather from "./AdditionalBockWeather";
import { ContentBlock } from "../style/contentStyle";

export default function WeatherToday({ result, cityName }) {
    const [currentWeather, setCurrentWeather] = useState(result[0]);
    const [isLoaded, setIsLoaded] = useState(false);

    const changeDetailInformation = useCallback(index => setCurrentWeather(result[index]), []);

    useEffect(() => {
        !result ? setIsLoaded(false) : setIsLoaded(true);
    }, [result]);

    return (
        isLoaded ? (
            <ContentBlock>
                <MainBlockWeather listOfData={currentWeather} cityName={cityName} complex={false} />
                <AdditionalBockWeather listOfData={result} changeDetailInformation={changeDetailInformation} complex={false} />
            </ContentBlock>
        ) : null
    );
}
