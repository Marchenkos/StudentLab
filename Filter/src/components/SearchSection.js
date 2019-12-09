import React, { useRef, useState, useCallback } from "react";
import search from "../img/search.png";
import "../style/search-section.less";

export default function SearchSection({ sortFilters, searchByName }) {
    const inputElement = useRef(null);
    const [selectedMode, setSelectedMode] = useState("completeMatch");
    const [inAlphabet, setInAlphabet] = useState(false);

    const searchElements = useCallback(e => {
        let searchResult = [];
        const condition = inputElement.current.value;
        e.preventDefault();

        if (condition.length > 0) {
            switch (selectedMode) {
            case "completeMatch": {
                if (sortFilters.includes(condition)) {
                    searchResult = sortFilters.filter(el => el == condition);
                }

                break;
            }
            case "startWith": {
                searchResult = sortFilters.filter(name => name.toLowerCase().startsWith(condition.toLowerCase()));

                break;
            }
            case "partialeMatch": {
                searchResult = sortFilters.filter(name => name.toLowerCase().includes(condition.toLowerCase()));

                break;
            }
            default:
                searchByName(sortFilters);
            }

            console.log(searchResult);

            if (searchResult.length) {
                console.log(inAlphabet);
                if (inAlphabet) {
                    console.log(searchResult.sort());

                    searchByName(searchResult.sort());
                } else {
                    searchByName(searchResult);
                }
            } else {
                searchByName(null);
            }
        } else {
            searchByName(condition);
        }
    }, [sortFilters, selectedMode, inAlphabet]);

    const changeMode = e => {
        setSelectedMode(e.target.value);
    };

    const changeOrder = () => {
        setInAlphabet(!inAlphabet);
    };

    return (
        <div className="search-section">
            <span className="search-section__search-button" onClick={searchElements}>
                <img className="search-button" alt="arrow" src={search} />
            </span>
            <input className="search_section__search-name" ref={inputElement} placeholder="Search.." onChange={searchElements} />
            <div className="search_section__search-conditions">
                <button className="conditions__alphabet" onClick={changeOrder}>A-Z</button>
                <select className="conditions__modeList" defaultValue="completeMatch" onChange={changeMode}>
                    <option value="completeMatch">**</option>
                    <option value="startWith">*_</option>
                    <option value="partialeMatch">*_*_</option>
                </select>
            </div>
        </div>
    );
}
