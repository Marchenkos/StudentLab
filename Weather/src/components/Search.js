import React from "react";
import search from "../../img/search.png";
import { SearchButton, Option, SearchLine, SearchContainer, Select } from "../style/searchStyle";

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
