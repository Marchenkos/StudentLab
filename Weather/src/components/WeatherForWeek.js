import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import styled from "styled-components";
import MainBlockWeather from "./MainBlockWeather";
import AdditionalBockWeather from "./AdditionalBockWeather";
import { MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH } from "../constants";
import { device } from "../style/device";
import { ContentBlock } from "../style/contentStyle";
import { mobileVersionHelper } from "../additionalFunctions/mobileVersionHelpers";

const Headers = styled.div`
    font-family: Comic Helvetic;
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin: 0 auto;

    @media ${device.tablet} {
        width: 65%;
    }
`;

Headers.displayName = "Headers";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    width: 80%;
`;

ButtonContainer.displayName = "ButtonContainer";

const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    color: #120748;
    font-family: Comic Helvetic;
    font-size: 25px;
`;

Button.displayName = "Button";

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

    @media ${device.tablet} {
        padding: 10px 15px;
        font-size: 20px;
    }
`;

HeaderItem.displayName = "HeaderItem";

export default function WeatherForWeek({ result, cityName }) {
    const [currentWeather, setCurrentWeather] = useState(result[0]);
    const [currentDay, setCurrentDay] = useState("");
    const [daysOfTheWeek, setDaysOfTheWeek] = useState([]);
    const [detailInformation, setDetailInformation] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobileVersion, setIsMobileVersion] = useState(window.innerWidth < MAX_MOBILE_WIDTH);
    const [isTabletVersion, setIsTabletVersion] = useState(window.innerWidth < MAX_TABLET_WIDTH);

    const changeVersion = () => {
        setIsMobileVersion(window.innerWidth < MAX_MOBILE_WIDTH);
        setIsTabletVersion(window.innerWidth < MAX_TABLET_WIDTH);
    };

    const chooseDay = useCallback(e => setCurrentDay(e.target.value), []);

    const changeDay = useCallback(e => {
        const currentIndex = daysOfTheWeek.indexOf(currentDay);

        if (e.target.value === "next") {
            if (daysOfTheWeek.length !== currentIndex + 1) {
                setCurrentDay(daysOfTheWeek[currentIndex + 1]);
            }
        } else if (currentIndex - 1 > -1) {
            setCurrentDay(daysOfTheWeek[currentIndex - 1]);
        }
    }, []);

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

    const changeDetailInformation = useCallback(index => setDetailInformation(currentWeather[index]), [currentWeather]);

    return (
        isLoaded ? (
            isMobileVersion ? renderForMobileVersion()
                : (
                    <>
                        <Headers>
                            {
                                daysOfTheWeek.map((day, index) => {
                                    const dayForVersion = isTabletVersion ? day.slice(0, 3)
                                        : day;

                                    return (
                                        <HeaderItem key={index} onClick={chooseDay} value={day} active={day === currentDay}>
                                            {dayForVersion}
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
