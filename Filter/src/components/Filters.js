import React, { useCallback, useState, useEffect } from "react";
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

    const [cellsForFilter, setCellsForFilter] = useState([]);
    const [elementsForFilter, setElementsForFilter] = useState([]);
    const [tablesForFilter, setTablesForFilter] = useState([]);

    useEffect(() => {
        const newCellsForFilter = [];

        for (const table of currentTables) {
            for (const cell in table) {
                newCellsForFilter.push(cell);
            }
        }

        setCellsForFilter(newCellsForFilter);

    }, [currentTables]);

    useEffect(() => {
        const newElementsForFilter = [];

        for (const table of currentCells) {
            newTablesForFilter.push(table);
        }

        setTablesForFilter(newTablesForFilter);
    }, [currentCells]);

    useEffect(() => {
        const newTablesForFilter = [];

        for (const table in filters) {
            newTablesForFilter.push(table);
        }

        setTablesForFilter(newTablesForFilter);
    }, [filters]);

    const changeContext = tableName => {
        if (currentTables.hasOwnProperty(tableName)) {
            removeTable(tableName);
        } else {
            addTable(tableName);
        }
    };

    const changeDimensions = cellName => {
        if (currentCells.includes(cellName)) {
            removeCell(cellName);
        } else {
            addCell(cellName);
        }
    };

    const changeResult = useCallback(elementName => {
        if (result.includes(elementName)) {
            removeElement(elementName);
        } else {
            addElement(elementName);
        }
    }, [currentCells]);

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
                <FilterSection changeResult={changeResult} currentContext={customElements} />
                <hr />
            </div>
        </main>
    );
}
