import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainBlockWeather from "./MainBlockWeather";
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
    }

    ${({ complex }) => complex && `
        background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
        display: flex;
        flex-direction: column;
        width: 65%;

        @media ${device.laptop} {
            width: 70%;
        }

        @media ${device.tablet} {
            width: 80%;
            padding: 15px 0;
        }
    `}
`;

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
