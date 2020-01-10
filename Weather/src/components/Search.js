import React from "react";
import styled from "styled-components";
import search from "../../img/search.png";
import { device } from "../style/device";

const SearchContainer = styled.div`
    display: flex;
    align-items: flex-end;
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
    }

    @media ${device.tablet} {
        font-size: 15px;
        border: 2px solid white;
        border-radius: 5px;
        height: 30px;
        padding: 3px 5px 0;
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
`;

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.cityNameRef = React.createRef();
        this.mode = React.createRef();
    }

    getWeatherResult = () => {
        this.props.getWeather(this.cityNameRef.current.value, this.mode.current.value);
    }

    render() {
        return (
            <SearchContainer>
                <Select ref={this.mode}>
                    <Option>Now</Option>
                    <Option>Today</Option>
                    <Option>5 days</Option>
                </Select>
                <SearchLine placeholder="Enter the city" ref={this.cityNameRef} />
                <SearchButton src={search} onClick={this.getWeatherResult} />
            </SearchContainer>
        );
    }
}
