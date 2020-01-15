import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import styled from "styled-components";
import MainBlockWeather from "./MainBlockWeather";
import AdditionalBockWeather from "./AdditionalBockWeather";
import { MAX_MOBILE_WIDTH } from "../constants";
import { device } from "../style/device";
import { ContentBlock } from "../style/contentStyle";
import mobileVersionHelper from "../additionalFunctions/mobileVersionHelper";

const Headers = styled.div`
    font-family: Comic Helvetic;
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 0 auto;

    @media ${device.tablet} {
        width: 68%;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    width: 80%;
`;

const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    color: #120748;
    font-family: Comic Helvetic;
    font-size: 25px;
`;

const HeaderItem = styled.button`
    color: white;
    border: none;
    font-size: 20px;
    padding: 10px 10px;
    background: #4e4285;
    cursor: pointer;

    ${({ active }) => active && `
        background: #272266;
    `}

    @media ${device.laptop} {
        font-size: 16px;
    }
`;

export default function WeatherForWeek({ result, cityName }) {
    const [currentWeather, setCurrentWeather] = useState(result[0]);
    const [currentDay, setCurrentDay] = useState("");
    const [daysOfTheWeek, setDaysOfTheWeek] = useState([]);
    const [detailInformation, setDetailInformation] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobileVersion, setIsMobileVersion] = useState(window.innerWidth < MAX_MOBILE_WIDTH);

    const changeVersion = () => setIsMobileVersion(window.innerWidth < MAX_MOBILE_WIDTH);

    const chooseDay = e => setCurrentDay(e.target.value);

    const changeDay = e => {
        const currentIndex = daysOfTheWeek.indexOf(currentDay);

        if (e.target.value === "next") {
            if (daysOfTheWeek.length !== currentIndex + 1) {
                setCurrentDay(daysOfTheWeek[currentIndex + 1]);
            }
        } else if (currentIndex - 1 > -1) {
            setCurrentDay(daysOfTheWeek[currentIndex - 1]);
        }
    };

    const renderForMobileVersion = () => {
        return (
            <>
                <ButtonContainer>
                    <Button onClick={changeDay} value="prev">Previous</Button>
                    <Button onClick={changeDay} value="next">Next</Button>
                </ButtonContainer>
                <ContentBlock complex>
                    <MainBlockWeather currentDay={currentDay} listOfData={detailInformation} cityName={cityName} />
                </ContentBlock>
            </>
        );
    };

    useEffect(() => mobileVersionHelper(changeVersion), []);

    useEffect(() => setDetailInformation(currentWeather[0]), [currentWeather]);

    useEffect(() => {
        if (!result) {
            setIsLoaded(false);
        } else {
            setIsLoaded(true);
        }
    }, [result]);

    useEffect(() => {
        const listOfDays = [];

        if (result.length > 0) {
            result.map(item => {
                item.map(data => {
                    !listOfDays.includes(moment(data.date, "YYYY-MM-DD").format("dddd"))
                        ? listOfDays.push(moment(data.date, "YYYY-MM-DD").format("dddd"))
                        : null;
                });
            });
        }

        setDaysOfTheWeek(listOfDays);
        setCurrentDay(listOfDays[0]);
    }, [result]);

    useEffect(() => {
        const indexWeather = daysOfTheWeek.indexOf(currentDay);

        if (indexWeather !== -1) {
            setCurrentWeather(result[indexWeather]);
        }
    }, [currentDay]);

    const changeDetailInformation = useCallback(index => {
        setDetailInformation(currentWeather[index]);
    }, [currentWeather]);

    return (
        isLoaded ? (
            isMobileVersion ? renderForMobileVersion()
                : (
                    <>
                        <Headers>
                            {
                                daysOfTheWeek.map((day, index) => {
                                    return (
                                        <HeaderItem key={index} onClick={chooseDay} value={day} active={day === currentDay}>
                                            {day}
                                        </HeaderItem>
                                    );
                                })
                            }
                        </Headers>
                        <ContentBlock complex>
                            <MainBlockWeather listOfData={detailInformation} cityName={cityName} />
                            <AdditionalBockWeather listOfData={currentWeather} changeDetailInformation={changeDetailInformation} />
                        </ContentBlock>
                    </>
                )
        ) : null
    );
}
