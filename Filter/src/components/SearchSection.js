import React, { useState, useRef, useCallback } from "react";
import search from "../img/search.png";
import "../style/search-section.less";

export default function SearchSection({ sortFilters, searchByName }) {
    const completeMatch = "completeMatch";
    const startWith = "startWith";
    const partialeMatch = "partialeMatch";
    const inputElement = useRef(null);
    const [selectedMode, setSelectedMode] = useState("completeMatch");
    const [isCheckCase, setIsCheckCase] = useState(false);

    const changeMode = e => setSelectedMode(e.target.value);
    const changeOrder = () => setIsCheckCase(!isCheckCase);

    const searchElements = useCallback(e => {
        let searchResult = [];
        const condition = inputElement.current.value;
        const modeToFilter = {
            [completeMatch]: filters => filters.filter(element => element.toLowerCase() === condition.toLowerCase()),
            [startWith]: filters => filters.filter(name => name.toLowerCase().startsWith(condition.toLowerCase())),
            [partialeMatch]: filters => filters.filter(name => name.toLowerCase().includes(condition.toLowerCase()))
        };

        e.preventDefault();

        console.log(condition);

        if (condition && condition.length > 0) {
            searchResult = modeToFilter[selectedMode](sortFilters);

            if (searchResult.length == 0) {
                searchByName(sortFilters);
            }

            if (searchResult.length) {
                if (isCheckCase) {
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
    }, [sortFilters, selectedMode, isCheckCase]);

    return (
        <div className="search-section">
            <span className="search-section__search-button" onClick={searchElements}>
                <img className="search-button" alt="arrow" src={search} />
            </span>
            <input className="search_section__search-name" ref={inputElement} placeholder="Search.." onChange={searchElements} />
            <div className="search_section__search-conditions">
                <select className="conditions__modeList" onChange={changeMode}>
                    <option className="modeList__item" value="completeMatch">**</option>
                    <option className="modeList__item" value="startWith">*_</option>
                    <option className="modeList__item" value="partialeMatch">*_*_</option>
                </select>
                {isCheckCase ? <button className="conditions__alphabet conditions__alphabet--select" onClick={changeOrder}>A-Z</button>
                    : <button className="conditions__alphabet" onClick={changeOrder}>A-Z</button>}
            </div>
        </div>
    );
}
