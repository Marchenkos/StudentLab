import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import FiltersList from "./FiltersList";
import FilterSection from "./FilterSection";
import filterIcon from "../img/filterIcon.png";
import closeButton from "../img/delete-cross.png";
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

    return (
        <Draggable handle="article">
            <main className="filter">
                <article className="filter__title">
                    <div className="title-block__icon">
                        <img className="filter-icon" alt="arrow" src={filterIcon} />
                    </div>
                    <span className="title-block__name">filters</span>
                    <div className="title-block__close-button">
                        <img className="close-button" alt="arrow" src={closeButton} />
                    </div>
                </article>
                <div className="filter__conditions">
                    <FiltersList changeContext={changeContext} currentContext={filters} selectedContext={currentTables} title="topic" />
                    <hr className="section_separator" />
                    <FiltersList changeContext={changeDimensions} currentContext={cellsForFilter} selectedContext={currentCells} title="section" />
                    <hr className="section_separator" />
                    <FilterSection changeResult={changeResult} currentElements={elementsForFilter} selectedFilters={result} />
                    <hr className="section_separator" />
                </div>
            </main>
        </Draggable>
    );
}
