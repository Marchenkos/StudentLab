import React from "react";
import search from "../../img/search.png";
import { SearchButton, SearchLine, SearchContainer, Select } from "../style/searchStyle";

export default class Search extends React.Component {
    render() {
        return (
            <SearchContainer>
                <Select>
                    <option className="modes-list__item">Now</option>
                    <option className="modes-list__item">Today</option>
                    <option className="modes-list__item">5 days</option>
                    <option className="modes-list__item">Month</option>
                </Select>
                <SearchLine placeholder="Enter the city" />
                <SearchButton src={search} />
            </SearchContainer>
        );
    }
}
