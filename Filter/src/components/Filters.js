import React, { useState, useEffect } from "react";
import FiltersList from "./FiltersList";
import SearchSection from "./SearchSection";
import OrderSection from "./OrderSection";
import FilterSection from "./FilterSection";
import filterIcon from "../img/filterIcon.png";
import closeButton from "../img/delete-cross.png";
import "../style/filters.less";

export default function Filters({
    filters, currentTables, currentCells, addTable, addCell, addElement, removeTable, removeCell, removeElement }) {

    const [cellsForFilter, setCellsForFilter] = useState({});
    const [elementsForFilter, setElementsForFilter] = useState([]);
    const [isFilterOpen, setisFilterOpen] = useState(true);

    useEffect(() => {
        const newCellsForFilter = {};

        for (const table in filters) {
            if (currentTables.includes(table)) {
                for (const value in filters[table]) {
                    newCellsForFilter[value] = filters[table][value];
                }
            }
        }

        setCellsForFilter(newCellsForFilter);
    }, [currentTables]);

    useEffect(() => {
        const newElementsForFilter = [];

        for (const cell in cellsForFilter) {
            if (currentCells.includes(cell)) {
                for (const element of cellsForFilter[cell]) {
                    newElementsForFilter.push(element);
                }
            }
        }

        setElementsForFilter(newElementsForFilter);
    }, [currentCells]);

    const sortFilters = list => {
        setElementsForFilter(list);
    };

    const changeFilterMode = () => {
        setisFilterOpen(!isFilterOpen);
    };

    const changeContext = (tableName, condition) => {
        if (condition) {
            addTable(tableName);
        } else {
            removeTable(tableName);
        }
    };

    const changeResult = (elementName, condition) => {
        if (condition) {
            addElement(elementName);
        } else {
            removeElement(elementName);
        }
    };

    const changeDimensions = (cellName, condition) => {
        if (condition) {
            addCell(cellName);
        } else {
            removeCell(cellName);
        }
    };

    const searchByName = value => {
        setElementsForFilter(value);
    };

    return (
        <main className="filter">
            <div className="filter__title">
                <span className="title-block__icon">
                    <img className="filter-icon" alt="arrow" src={filterIcon} />
                </span>
                <span className="title-block__name">filters</span>
                <span className="title-block__close-button" onClick={changeFilterMode}>
                    <img className="close-button" alt="arrow" src={closeButton} />
                </span>
            </div>
            {
                isFilterOpen ? (
                    <div className="filter__conditions">
                        <FiltersList changeContext={changeContext} currentContext={filters} title="topic" />
                        <hr />
                        <FiltersList changeContext={changeDimensions} currentContext={cellsForFilter} title="section" />
                        <hr />
                        <SearchSection sortFilters={elementsForFilter} searchByName={searchByName} />
                        <OrderSection filtersList={elementsForFilter} sortFilters={sortFilters} />
                        <FilterSection changeResult={changeResult} currentElements={elementsForFilter} />
                        <hr />
                    </div>
                )
                    : null
            }
        </main>
    );
}
