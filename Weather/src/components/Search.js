import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import { device } from "../style/device";
import { TIME_PERIOD } from "../constants";
import search from "../../img/search.png";

const SearchBlock = styled.div`
    display: flex;
    align-items: flex-end;

    @media ${device.mobile} {
        margin: 30px auto 10px;
    }
`;

const SearchButton = styled.img`
    max-width: 40px;

    @media ${device.tablet} {
        margin-left: 5px;
        max-width: 27px;
    }
`;

const SearchLine = styled.input`
    border: none;
    border-bottom: 2px solid white;
    background: none;
    border-radius: 2px;
    color: #0f054a;
    outline:none;
    font-size: 20px;
    font-family: Comic Helvetic;

    &::-webkit-input-placeholder {
        color: #0f054a;
        font-family: Comic Helvetic;

        @media ${device.mobile} {
            color: white;
        }
    }

    @media ${device.tablet} {
        font-size: 15px;
        border: 2px solid white;
        border-radius: 5px;
        height: 30px;
        padding: 3px 5px 0;
    }

    @media ${device.mobile} {
        color: white;
    }
`;

const Select = styled.select`
    height: 35px;
    outline:none;
    font-size: 20px;
    font-family: Comic Helvetic;
    background: none;
    margin-right: 20px;
    color: #0f054a;
    border: none;

    @media ${device.tablet} {
        font-size: 18px;
        color: white;
        margin-right: 5px;
    }

    @media ${device.mobile} {
        margin-right: 8px;
    }
`;

const Option = styled.option`
    font-family: Comic Helvetic;
    color: #0f054a;
    margin-top: 10px;
    outline:none;
    font-size: 20px;

    @media ${device.tablet} {
        font-size: 18px;
    }

    @media ${device.mobile} {
        font-size: 13px;
        outline: none;
    }
`;

export default function Search({ getWeather }) {
    const cityNameRef = useRef(null);
    const mode = useRef(null);

    const getWeatherResult = useCallback(() => getWeather(cityNameRef.current.value, mode.current.value), []);

    return (
        <SearchBlock>
            <Select ref={mode}>
                <Option>{TIME_PERIOD.NOW}</Option>
                <Option>{TIME_PERIOD.TODAY}</Option>
                <Option>{TIME_PERIOD.FIVE_DAYS}</Option>
            </Select>
            <SearchLine placeholder="Enter the city" ref={cityNameRef} />
            <SearchButton src={search} onClick={getWeatherResult} />
        </SearchBlock>
    );
}
