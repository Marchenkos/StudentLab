import React, { useState, useEffect } from "react";
import MainBlockWeather from "./MainBlockWeather";
import { ContentBlock } from "../style/contentStyle";

export default function WeatherNow({ result, cityName }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!result) {
            setIsLoaded(false);
        } else {
            setIsLoaded(true);
        }
    }, [result]);

    return (
        isLoaded ? (
            <ContentBlock>
                <MainBlockWeather listOfData={result} cityName={cityName} complex={false} />
            </ContentBlock>
        ) : null
    );
}
