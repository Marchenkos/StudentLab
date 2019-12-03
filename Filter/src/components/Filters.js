import React, { useState, useEffect } from "react";
import Context from "./Context";
import Dimensions from "./Dimensions";
import SearchSection from "./SearchSection";
import OrderSection from "./OrderSection";
import FilterSection from "./FilterSection";
import filterIcon from "../img/filterIcon.png";
import closeButton from "../img/delete-cross.png";
import "../style/filters.less";

export default function Filters({
    filters, currentTables, currentCells, result, addTable, addCell, addElement, removeTable, removeCell, removeElement }) {

    const [cellsForFilter, setCellsForFilter] = useState({});
    const [elementsForFilter, setElementsForFilter] = useState([]);


    useEffect(() => {
        const newCellsForFilter = {};

        for (const table in filters) {
            if (currentTables.includes(table)) {
                for (const value in table) {
                    newCellsForFilter.value = table[value];
                }
            }
        }

        setCellsForFilter(newCellsForFilter);
    }, [currentTables]);

    useEffect(() => {
        const newElementsForFilter = {};

        for (const cell in cellsForFilter) {
            if (currentCells.includes(cell)) {
                newElementsForFilter.cell = cellsForFilter[cell];
            }
        }

        setElementsForFilter(newElementsForFilter);
    }, [currentCells]);

    const changeResult = elementName => {
        if (result.includes(elementName)) {
            removeElement(elementName);
        } else {
            addElement(elementName);
        }
    };

    const changeContext = (tableName, condition) => {
        if (condition) {
            addTable(tableName);
        } else {
            removeTable(tableName);
        }
    };

    const changeDimensions = cellName => {
        if (currentCells.includes(cellName)) {
            removeCell(cellName);
        } else {
            addCell(cellName);
        }
    };

    return (
        <main className="filter">
            <div className="filter__title">
                <span className="title-block__icon">
                    <img className="filter-icon" alt="arrow" src={filterIcon} />
                </span>
                <span className="title-block__name">filters</span>
                <span className="title-block__close-button">
                    <img className="close-button" alt="arrow" src={closeButton} />
                </span>
            </div>

            <div className="filter__conditions">
                <Context changeContext={changeContext} currentContext={filters} />
                <hr />
                <Dimensions changeDimensions={changeDimensions} currentDimensions={cellsForFilter} />
                <hr />
                <SearchSection />
                <OrderSection />
                <FilterSection changeResult={changeResult} currentElements={elementsForFilter} />
                <hr />
            </div>
        </main>
    );
}
