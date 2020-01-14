import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import WeatherForWeek from "./WeatherForWeek";
import WeatherToday from "./WeatherToday";
import WeatherNow from "./WeatherNow";
import { device } from "../style/device";
import { now, today, fiveDays, maxModileWidth } from "../constants";
import { changeStyleForMobile, changeStyleForDesktop } from "../additionalFunctions/changeStyleForMobile";
import mobileVersionHelper from "../additionalFunctions/mobileVersionHelper";
import errorPageMobile from "../../img/errorPageMobile.png";
import errorPage from "../../img/errorPage2.png";

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

const InformationContainer = styled.div`
    background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
    padding:20px;

    @media ${device.mobile} {
        background-image: url(../../img/123.png);
        background-repeat: no-repeat;
        background-size: 100%;
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
        min-height: 450px;
        background-image: url(../../img/background2.jpg);
    }

    @media ${device.mobile} {
        background-image: none;
        height: 600px;
        padding-top: 10px;
    }
`;

const ErroImg = styled.img`
    max-width: 100%;
`;

export default function Content({ result, cityName, searchMode, error }) {
    const modeToShow = {
        [now]: () => <WeatherNow result={result} cityName={cityName} />,
        [today]: () => <WeatherToday result={result} cityName={cityName} />,
        [fiveDays]: () => <WeatherForWeek result={result} cityName={cityName} />
    };

    const [isMobileVersion, setIsMobileVersion] = useState(window.innerWidth < maxModileWidth);

    const changeVersion = () => setIsMobileVersion(window.innerWidth < maxModileWidth);

    const renderErrorMessage = () => {
        if (isMobileVersion) {
            changeStyleForMobile();

            return <ErroImg block="error" src={errorPageMobile} />;
        } else {
            changeStyleForDesktop();

            return <ErroImg block="error" src={errorPage} />;
        }
    };

    useEffect(() => mobileVersionHelper(changeVersion), []);

    return (
        error ? renderErrorMessage()
            : (
                <InformationContainer>
                    <BackgroundContainer>
                        {
                            cityName ? (
                                result ? modeToShow[searchMode.toLowerCase()]()
                                    : <Spinner />
                            ) : null
                        }
                    </BackgroundContainer>
                </InformationContainer>
            )
    );
}
