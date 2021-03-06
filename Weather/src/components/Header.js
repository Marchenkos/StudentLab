import React, { useCallback, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";
import Search from "./Search";
import logo from "../../img/logo.png";
import { device } from "../style/device";
import { NOW, TODAY, FIVE_DAYS, DELAY_BEFORE_SUBMIT, MAX_MOBILE_WIDTH } from "../constants";
import { Img } from "../style/contentStyle";
import { mobileVersionHelper } from "../additionalFunctions/mobileVersionHelpers";
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

HeaderBlock.displayName = "HeaderBlock";

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

LogoBlock.displayName = "LogoBlock";

const LogoName = styled.span`
    font-family: Hammer Fat;
    font-size: 40px;

    @media ${device.tablet} {
        margin-left: 10px;
        font-size: 30px;
    }
`;

LogoName.displayName = "LogoName";

export default function Header({
    onFetchWeatherRequestNow,
    onFetchWeatherRequestToday,
    onFetchWeatherRequestForWeek,
    onEnterCityName,
    onChangeMode,
    onClearResult }) {

    const [isDisplaySearchLine, setDisplaySearchLine] = useState(true);

    const modeToFetch = {
        [NOW]: () => { onFetchWeatherRequestNow(); },
        [TODAY]: () => { onFetchWeatherRequestToday(); },
        [FIVE_DAYS]: () => { onFetchWeatherRequestForWeek(); }
    };

    const getWeatherWithDebounce = debounce(mode => modeToFetch[mode.toLowerCase()](), DELAY_BEFORE_SUBMIT);

    const showSearchLine = () => setDisplaySearchLine(!isDisplaySearchLine);

    const showSearchElements = () => setDisplaySearchLine(window.innerWidth > MAX_MOBILE_WIDTH);

    const getWeather = useCallback((name, mode) => {
        onClearResult();
        onEnterCityName(name);
        onChangeMode(mode);
        getWeatherWithDebounce(mode);
    }, []);

    const renderContent = () => {
        return window.innerWidth < MAX_MOBILE_WIDTH
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
