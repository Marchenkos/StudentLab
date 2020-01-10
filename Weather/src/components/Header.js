import React, { useCallback } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";
import Search from "./Search";
import { Img } from "../style/contentStyle";
import logo from "../../img/logo.png";
import { device } from "../style/device";
import { now, today, fiveDays, delayBeforeSubmit } from "../constants";

const HeaderConatainer = styled.div`
    background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
    color: #f2eafc;
    display: flex;
    padding: 20px 50px;
    justify-content: flex-start;
    align-items: flex-end;

    @media ${device.mobile} {
        justify-content: center;
        background: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex-grow: 1;

    @media ${device.tablet} {
        margin-right: 30px;
    }

    @media ${device.mobile} {
        justify-content: center;
    }
`;

const LogoName = styled.span`
    font-family: Hammer Fat;
    font-size: 40px;

    @media ${device.tablet} {
        margin-left: 10px;
        font-size: 30px;
    }
`;

export default function Header({
    onFetchWeatherRequestNow, onFetchWeatherRequestToday, onFetchWeatherRequestForWeek,
    onEnterCityName, onChangeMode, onClearResult }) {

    const modeToFetch = {
        [now]: () => { onFetchWeatherRequestNow(); },
        [today]: () => { onFetchWeatherRequestToday(); },
        [fiveDays]: () => { onFetchWeatherRequestForWeek(); }
    };

    const getWeatherWithDebounce = debounce(mode => {
        modeToFetch[mode.toLowerCase()]();
    }, delayBeforeSubmit);

    const getWeather = useCallback((name, mode) => {
        onClearResult();
        onEnterCityName(name);
        onChangeMode(mode);
        getWeatherWithDebounce(mode);
    }, []);

    return (
        <HeaderConatainer>
            <LogoContainer>
                <Img src={logo} />
                <LogoName>Weather</LogoName>
            </LogoContainer>
            <Search getWeather={getWeather} />
        </HeaderConatainer>
    );
}
