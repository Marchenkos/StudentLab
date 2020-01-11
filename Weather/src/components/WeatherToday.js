import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import MainBlockWeather from "./MainBlockWeather";
import AdditionalBockWeather from "./AdditionalBockWeather";
import { device } from "../style/device";

const ContentBlock = styled.div`
    height: auto;
    font-family: Colos Text;
    width: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 7px;
    margin: 0 auto;
    background-image: url(../../img/backgroundWindow.jpg);
    background-repeat: no-repeat;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    @media ${device.laptop} {
        width: 65%;
        padding: 20px;
    };

    @media ${device.mobile} {
        background-color: #814bc7;
        background-image: url(../../img/backgroundWindow.jpg);
    };
`;

export default function WeatherToday({ result, cityName }) {
    const [currentWeather, setCurrentWeather] = useState(result[0]);
    const [isLoad, setIsLoad] = useState(false);

    const changeDetailInformation = useCallback(index => {
        setCurrentWeather(result[index]);
    }, []);

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
                <MainBlockWeather listOfData={currentWeather} cityName={cityName} complex={false} />
                <AdditionalBockWeather listOfData={result} changeDetailInformation={changeDetailInformation} complex={false} />
            </ContentBlock>
        ) : null
    );
}
