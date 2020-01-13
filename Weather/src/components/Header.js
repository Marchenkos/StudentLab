import React, { useCallback, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";
import Search from "./Search";
import logo from "../../img/logo.png";
import { device } from "../style/device";
import { now, today, fiveDays, delayBeforeSubmit, maxModileWidth } from "../constants";
import { Img } from "../style/contentStyle";
import mobileVersionHelper from "../additionalFunctions/mobileVersionHelper";
import "../style/menu-button.css";

const HeaderBlock = styled.div`
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

const LogoBlock = styled.div`
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
    onFetchWeatherRequestNow,
    onFetchWeatherRequestToday,
    onFetchWeatherRequestForWeek,
    onEnterCityName,
    onChangeMode,
    onClearResult }) {

    const [isDisplaySearchLine, setDisplaySearchLine] = useState(true);

    const modeToFetch = {
        [now]: () => { onFetchWeatherRequestNow(); },
        [today]: () => { onFetchWeatherRequestToday(); },
        [fiveDays]: () => { onFetchWeatherRequestForWeek(); }
    };

    const getWeatherWithDebounce = debounce(mode => modeToFetch[mode.toLowerCase()](), delayBeforeSubmit);

    const showSearchLine = () => setDisplaySearchLine(!isDisplaySearchLine);

    const showSearchElements = () => setDisplaySearchLine(window.innerWidth > maxModileWidth);

    const getWeather = useCallback((name, mode) => {
        onClearResult();
        onEnterCityName(name);
        onChangeMode(mode);
        getWeatherWithDebounce(mode);
    }, []);

    const renderContent = () => {
        return window.innerWidth < maxModileWidth
            ? (
                <>
                    <button type="submit" className="icon-menu-outline menu-button" onClick={showSearchLine} />
                    <Search getWeather={getWeather} />
                </>
            ) : <Search getWeather={getWeather} />;
    };

    useEffect(() => mobileVersionHelper(showSearchElements), []);

    return (
        <HeaderBlock>
            <LogoBlock>
                <Img src={logo} />
                <LogoName>Weather</LogoName>
            </LogoBlock>
            {isDisplaySearchLine ? renderContent()
                : <button type="submit" className="icon-menu-outline menu-button" onClick={showSearchLine} />}
        </HeaderBlock>
    );
}
