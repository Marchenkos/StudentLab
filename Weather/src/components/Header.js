import React, { useCallback } from "react";
import Search from "./Search";
import logo from "../../img/logo.png";
import { Img, LogoName, HeaderConatainer, LogoContainer } from "../style/headerStyle";

export default function Header({ fetchUserRequest }) {
    const getWeather = useCallback(() => {
        fetchUserRequest();
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
