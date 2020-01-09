import React from "react";
import { Information, Img, InformationBlock, InformationBlockItem } from "../style/contentStyle";
import cloud from "../../img/weatherImg/rain.png";

export default function MainBlockWeather({ listOfData, cityName }) {
    const { tempetature, feelsLike, humidity, pressure, wind, weather } = listOfData;

    return (
        <InformationBlock block="main">
            <InformationBlockItem>
                <Img block="main" src={cloud} />
                <Information bold>
                    {tempetature}
                        &deg;
                </Information>
                <Information bold={false}>
                    {`Real feel: ${feelsLike}`}
                        &deg;
                </Information>
                <Information bold>{weather}</Information>
            </InformationBlockItem>
            <InformationBlockItem>
                <Information bold>{cityName}</Information>
                <Information bold={false}>
                    {`Humidity ${humidity}%`}
                </Information>
                <Information bold={false}>
                    {`Pressure ${pressure}hPa`}
                </Information>
                <Information bold={false}>
                    {`Wind speed ${wind}km/h`}
                </Information>
            </InformationBlockItem>
        </InformationBlock>
    );
}
