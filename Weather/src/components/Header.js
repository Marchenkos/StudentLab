import React, { useCallback, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";
import Search from "./Search";
import logo from "../../img/logo.png";
import { device } from "../style/device";
import { now, today, fiveDays, delayBeforeSubmit, maxModileWidth } from "../constants";
import mobileVersionHelper from "../additionalFunctions/mobileVersionHelper";
import "../style/menu-button.css";

const HeaderConatainer = styled.div`
    background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
    color: #f2eafc;
    display: flex;
    padding: 20px 50px;
    justify-content: flex-start;
    align-items: flex-end;

    @media ${device.mobile} {
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
        background: #120748;
    }
`;

const Img = styled.img`
    max-width: 100px;
    margin-right: 15px;
    src: ${"../../img/weahterImg/snow.png"}

    ${({ block }) => block === "main" && `
        max-width: 85px;
    `}

    ${({ block }) => block === "additional" && `
        max-width: 70px;
    `}

    @media ${device.laptop} {
        margin-right: 0;
    }

    @media ${device.tablet} {
        max-width: 80px;
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
        flex-basis: 80%;
        margin-right: 0;
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

    const [isDisplaySearchLine, setDisplaySearchLine] = useState(true);

    const modeToFetch = {
        [now]: () => { onFetchWeatherRequestNow(); },
        [today]: () => { onFetchWeatherRequestToday(); },
        [fiveDays]: () => { onFetchWeatherRequestForWeek(); }
    };

    const getWeatherWithDebounce = debounce(mode => {
        modeToFetch[mode.toLowerCase()]();
    }, delayBeforeSubmit);

    const showSearchLine = () => {
        setDisplaySearchLine(!isDisplaySearchLine);
    };

    const showSearchElements = () => {
        setDisplaySearchLine(window.innerWidth > maxModileWidth);
    };

    const getWeather = useCallback((name, mode) => {
        onClearResult();
        onEnterCityName(name);
        onChangeMode(mode);
        getWeatherWithDebounce(mode);
    }, []);

    const isMobile = () => {
        return window.innerWidth < maxModileWidth
            ? (
                <>
                    <button type="submit" className="icon-menu-outline menu-button" onClick={showSearchLine} />
                    <Search getWeather={getWeather} />
                </>
            ) : <Search getWeather={getWeather} />;
    };

    useEffect(() => {
        mobileVersionHelper(showSearchElements);
    }, []);

    return (
        <HeaderConatainer>
            <LogoContainer>
                <Img src={logo} />
                <LogoName>Weather</LogoName>
            </LogoContainer>
            {isDisplaySearchLine ? isMobile()
                : <button type="submit" className="icon-menu-outline menu-button" onClick={showSearchLine} />}
        </HeaderConatainer>
    );
}
