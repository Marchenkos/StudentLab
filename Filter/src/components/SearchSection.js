import React, { useRef, useState, useCallback } from "react";
import search from "../img/search.png";
import "../style/search-section.less";

export default function SearchSection({ sortFilters, searchByName }) {
    const inputElement = useRef(null);
    const [selectedMode, setSelectedMode] = useState("completeMatch");

    const searchElements = useCallback(e => {
        const condition = inputElement.current.value;
        e.preventDefault();

        if (condition.length > 0) {
            switch (selectedMode) {
            case "completeMatch": {
                if (sortFilters.includes(condition)) {
                    searchByName(sortFilters.filter(el => el == condition));
                } else {
                    searchByName(null);
                }

                break;
            }
            case "startWith": {
                const searchResult = sortFilters.filter(name => name.toLowerCase().startsWith(condition.toLowerCase()));

                if (searchResult.length) {
                    searchByName(searchResult);
                } else {
                    searchByName(null);
                }

                break;
            }
            case "partialeMatch": {
                const searchResult = sortFilters.filter(name => name.toLowerCase().includes(condition.toLowerCase()));

                if (searchResult.length) {
                    searchByName(searchResult);
                } else {
                    searchByName(null);
                }

                break;
            }
            default:
                searchByName(sortFilters);
            }
        } else {
            searchByName(condition);
        }
    }, [sortFilters, selectedMode]);

    const changeMode = e => {
        setSelectedMode(e.target.value);
    };

    return (
        <div className="search-section">
            <span className="search-section__search-button" onClick={searchElements}>
                <img className="search-button" alt="arrow" src={search} />
            </span>
            <input className="search_section__search-name" ref={inputElement} placeholder="Search.." onChange={searchElements} />
            <select className="modeList" defaultValue="completeMatch" onChange={changeMode}>
                <option value="completeMatch">**</option>
                <option value="startWith">*_</option>
                <option value="partialeMatch">*_*_</option>
            </select>
        </div>
    );
}
