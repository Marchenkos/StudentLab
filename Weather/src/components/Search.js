import React from "react";
import search from "../../img/search.png";
import { SearchButton, SearchLine, SearchContainer, Select } from "../style/searchStyle";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.cityNameRef = React.createRef();
        this.mode = React.createRef();
    }

    render() {
        return (
            <SearchContainer>
                <Select ref={this.mode}>
                    <option className="modes-list__item">Now</option>
                    <option className="modes-list__item">Today</option>
                    <option className="modes-list__item">5 days</option>
                </Select>
                <SearchLine placeholder="Enter the city" ref={this.cityNameRef} />
                <SearchButton src={search} onClick={() => { this.props.getWeather(this.cityNameRef.current.value, this.mode.current.value); }} />
            </SearchContainer>
        );
    }
}
