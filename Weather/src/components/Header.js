import React, { useCallback } from "react";
import debounce from "lodash.debounce";
import Search from "./Search";
import { LogoName, HeaderConatainer, LogoContainer } from "../style/headerStyle";
import { Img } from "../style/contentStyle";
import logo from "../../img/logo.png";

const now = "now";
const today = "today";
const fiveDays = "5 days";
const delayBeforeSubmit = 1500;

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
