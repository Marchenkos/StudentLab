import React from "react";
import styled from "styled-components";
import { device } from "../style/device";

const InformationBlock = styled.div`
    display: flex;
    justify-content: space-around;
    padding:15px;
    align-items: center;

    @media ${device.tablet} {
        padding: 0;
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

export default function AdditionalBockWeather({ listOfData, changeDetailInformation }) {
    const onChangeDetailInformation = index => {
        changeDetailInformation(index);
    };

    return (
        <InformationBlock complex>
            {
                listOfData.map((item, index) => {
                    return (
                        <InformationBlockItem key={index} index={index} onClick={() => { onChangeDetailInformation(index); }} active>
                            <Information bold={false} additional>{item.time}</Information>
                            <Img block="additional" src={`http://openweathermap.org/img/w/${item.icon}.png`} />
                            <Information bold={false} additional>
                                {item.tempetature}
                                &deg;
                            </Information>
                        </InformationBlockItem>
                    );
                })
            }
        </InformationBlock>
    );
}
