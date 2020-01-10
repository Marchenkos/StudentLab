import React from "react";
import styled, { keyframes } from "styled-components";
import WeatherForWeek from "./WeatherForWeek";
import WeatherToday from "./WeatherToday";
import WeatherNow from "./WeatherNow";
import { device } from "../style/device";
import { now, today, fiveDays } from "../constants";

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    position: fixed;
    top: 460px;
    left: 47%;
    width: 70px;
    height: 70px;
    margin: 1px;
    border-radius: 50%;
    border: 12px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spinner} 1.2s linear infinite;

    @media ${device.laptop} {
        top: 350px;
        left: 46%;
        width: 50px;
        height: 50px;
    }
`;

const ContentContainer = styled.div`
    background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
    padding:20px;

    @media ${device.mobile} {
        background: none;
    }
`;

const BackgroundContainer = styled.div`
    background-image: url(../../img/background2.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    height: 790px;
    width: 95%;
    padding-top: 14%;
    box-sizing: border-box;
    margin: 0 auto;

    @media ${device.laptop} {
        height: 600px;
        background-image: url(../../img/background2.jpg);
        background-position-y: 40px;
    }

    @media ${device.tablet} {
        height: 450px;
        background-image: url(../../img/background2.jpg);
    }

    @media ${device.mobile} {
        background-image: none;
        height: 300px;
    }
`;

export default function Content({ result, cityName, searchMode }) {
    const modeToShow = {
        [now]: () => <WeatherNow result={result} cityName={cityName} />,
        [today]: () => <WeatherToday result={result} cityName={cityName} />,
        [fiveDays]: () => <WeatherForWeek result={result} cityName={cityName} />
    };

    return (
        <ContentContainer>
            <BackgroundContainer>
                {
                    cityName ? (
                        result ? modeToShow[searchMode.toLowerCase()]()
                            : <Spinner />
                    ) : null
                }
            </BackgroundContainer>
        </ContentContainer>
    );
}
