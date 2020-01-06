import React from "react";
import Search from "./Search";
import logo from "../../img/logo.png";
import { Img, LogoName, HeaderConatainer, LogoContainer } from "../style/headerStyle";

const now = "now";
const today = "today";
const fiveDays = "5 days";

export default function Header({ onFetchWeatherRequestNow, onFetchWeatherRequestToday, onFetchWeatherRequestForWeek, onEnterCityName, onChangeMode }) {
    const modeToFetch = {
        [now]: () => { onFetchWeatherRequestNow(); },
        [today]: () => { onFetchWeatherRequestToday(); },
        [fiveDays]: () => { onFetchWeatherRequestForWeek(); }
    };

    const getWeather = (name, mode) => {
        onEnterCityName(name);
        onChangeMode(mode);
        modeToFetch[mode.toLowerCase()]();
    };

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
