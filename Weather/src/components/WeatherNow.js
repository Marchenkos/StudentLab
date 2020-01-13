import React, { useState, useEffect } from "react";
import MainBlockWeather from "./MainBlockWeather";
import { ContentBlock } from "../style/contentStyle";

export default function WeatherNow({ result, cityName }) {
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        if (!result) {
            setIsLoad(false);
        } else {
            setIsLoad(true);
        }
    }, [result]);

    return (
        isLoad ? (
            <ContentBlock>
                <MainBlockWeather listOfData={result} cityName={cityName} complex={false} />
            </ContentBlock>
        ) : null
    );
}
