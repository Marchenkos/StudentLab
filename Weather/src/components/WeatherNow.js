import React, { useState, useEffect } from "react";
import { ContentBlock } from "../style/contentStyle";
import MainBlockWeather from "./MainBlockWeather";

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
                <MainBlockWeather listOfData={result} cityName={cityName} />
            </ContentBlock>
        ) : null
    );
}
