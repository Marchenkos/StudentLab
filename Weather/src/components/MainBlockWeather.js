import React from "react";
import styled from "styled-components";
import cloud from "../../img/weatherImg/rain.png";
import { device } from "../style/device";

const InformationBlock = styled.div`
    display: flex;
    justify-content: space-around;
    padding:15px;
    align-items: center;

    @media ${device.tablet} {
        padding: 0;
    }

    
    @media ${device.mobile} {
        flex-direction: column;
    }

    ${({ complex }) => complex && `
        padding-top: 0;

        @media ${device.tablet} {
            padding: 0;
        }
    `}
`;

const InformationBlockItem = styled.div`
    display:flex;
    align-items: center;
    padding-top: 10px;
    flex-direction: column;
    margin: 0 10px;

    ${({ active }) => active && `
        cursor: pointer;
    `}

    @media ${device.tablet} {
        margin: 0;
        flex-basis: 45%;
        padding-top: 0px;
    }
`;

const Information = styled.span`
    font-size: 20px;
    margin: 10px;

    @media ${device.tablet} {
        font-size: 15px;
    }

    @media ${device.laptop} {
        margin: 7px;
    }

    ${({ bold }) => bold && `
        font-weight: bold;
        margin: 10px 0;
        font-size: 30px;

        @media ${device.tablet} {
            font-size: 25px;
        }
    `}

    ${({ additional }) => additional && `
        @media ${device.laptop} {
            margin: 0;
        }
    `}

    color: white;
`;

const Img = styled.img`
    max-width: 100px;
    margin-right: 15px;

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

export default function MainBlockWeather({ listOfData, cityName, currentDay }) {
    const { tempetature, feelsLike, humidity, pressure, wind, weather } = listOfData;

    return (
        <InformationBlock block="main">
            <InformationBlockItem>
                {
                    currentDay ? <Information bold>{currentDay}</Information>
                        : null
                }
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
