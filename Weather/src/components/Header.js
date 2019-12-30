import React from "react";
import Search from "./Search";
import logo from "../../img/logo.png";
import { Img, LogoName, HeaderConatainer, LogoContainer } from "../style/headerStyle";

export default function Header() {
    // const addWeather = () => {
    //     const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=7e3d24dcd28adb946abe1b502b8a5df8";
    //     fetch(weatherURL)
    //         .then(res => res.json())
    //         .then(data => {
    //             const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
    //             console.log("Data List Loaded", dailyData);
    //         });
    // };

    return (
        <HeaderConatainer>
            <LogoContainer>
                <Img src={logo} />
                <LogoName>Weather</LogoName>
            </LogoContainer>
            <Search />
        </HeaderConatainer>
    );
}
