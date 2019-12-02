import React from "react";
import search from "../img/search.png";
import "../style/search-section.less";

export default function SearchSection() {
    return (
        <div className="search-section">
            <span className="search-section__search-button">
                <img className="search-button" alt="arrow" src={search} />
            </span>
            <input className="search_section__search-name" />
        </div>
    );
}
