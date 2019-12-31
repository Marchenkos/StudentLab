import React from "react";
import search from "../../img/search.png";
import { SearchButton, SearchLine, SearchContainer, Select } from "../style/searchStyle";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.cityNameRef = React.createRef();
        this.APIkey = "7e3d24dcd28adb946abe1b502b8a5df8";
    }

    addWeather = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityNameRef.current.value}&lang=ru&units=metric&APPID=${this.APIkey}`;
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
                console.log("Data List Loaded", dailyData);
            });
    };

    render() {
        return (
            <SearchContainer>
                <Select>
                    <option className="modes-list__item">Now</option>
                    <option className="modes-list__item">Today</option>
                    <option className="modes-list__item">5 days</option>
                    <option className="modes-list__item">Month</option>
                </Select>
                <SearchLine placeholder="Enter the city" ref={this.cityNameRef} />
                <SearchButton src={search} onClick={this.props.getWeather} />
            </SearchContainer>
        );
    }
}
