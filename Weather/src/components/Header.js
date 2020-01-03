import React from "react";
import Search from "./Search";
import logo from "../../img/logo.png";
import { Img, LogoName, HeaderConatainer, LogoContainer } from "../style/headerStyle";

export default function Header({ onFetchWeatherRequest, onEnterCityName, onChangeMode }) {
    const getWeather = (name, mode) => {
        onEnterCityName(name);
        onChangeMode(mode);
        onFetchWeatherRequest();
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
