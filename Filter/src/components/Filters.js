import React, { useState, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import FilterSection from "./FilterSection";
import TitleForFilter from "./TitleForFilter";
import FiltersList from "./FilterList";

import "../style/filters.less";

export default function Filters({
    filters, currentTables, currentCells, addTable, addCell, addElement, removeTable, removeCell, removeElement, result }) {

    const [cellsForFilter, setCellsForFilter] = useState({});
    const [elementsForFilter, setElementsForFilter] = useState([]);

    useEffect(() => {
        const newCellsForFilter = {};

        for (const table in filters) {
            if (currentTables.includes(table)) {
                for (const value in filters[table]) {
                    newCellsForFilter[value] = filters[table][value];
                }
            }
        }

        for (const cell of currentCells) {
            if (!newCellsForFilter.hasOwnProperty(cell)) {
                removeCell(cell);
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

        for (const element of result) {
            if (!newElementsForFilter.includes(element)) {
                removeElement(element);
            }
        }

        setElementsForFilter(newElementsForFilter);
    }, [currentCells]);

    const changeContext = useCallback((tableName, condition) => {
        if (condition) {
            addTable(tableName);
        } else {
            removeTable(tableName);
        }
    }, []);

    const changeResult = useCallback((elementName, condition) => {
        if (condition) {
            addElement(elementName);
        } else {
            removeElement(elementName);
        }
    }, []);

    const changeDimensions = useCallback((cellName, condition) => {
        if (condition) {
            addCell(cellName);
        } else {
            removeCell(cellName);
        }
    }, []);

    return (
        <Draggable handle="article">
            <main className="filter">
                <TitleForFilter />
                <div className="filter__conditions">
                    <FilterSection changeContext={changeContext} currentContext={filters} selectedContext={currentTables} title="topic" />
                    <hr className="section_separator" />
                    <FilterSection changeContext={changeDimensions} currentContext={cellsForFilter} selectedContext={currentCells} title="section" />
                    <hr className="section_separator" />
                    <FiltersList changeResult={changeResult} currentElements={elementsForFilter} selectedFilters={result} />
                    <hr className="section_separator" />
                </div>
            </main>
        </Draggable>
    );
}
