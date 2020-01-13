import React from "react";
import { iconsCollection } from "../constants";
import { InformationBlock, InformationBlockItem, Information, Img } from "../style/contentStyle";

export default function MainBlockWeather({ listOfData, cityName, currentDay }) {
    const { tempetature, feelsLike, humidity, pressure, wind, weather, icon } = listOfData;

    return (
        <InformationBlock block="main">
            <InformationBlockItem>
                {
                    currentDay ? <Information bold>{currentDay}</Information>
                        : null
                }
                <Img block="main" src={iconsCollection.get(icon.slice(0, -1))} />
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
