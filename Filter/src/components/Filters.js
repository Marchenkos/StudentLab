import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import FiltersList from "./FiltersList";
import FilterSection from "./FilterSection";
import filterIcon from "../img/filterIcon.png";
import closeButton from "../img/delete-cross.png";
import "../style/filters.less";

export default function Filters({
    filters, currentTables, currentCells, addTable, addCell, addElement, removeTable, removeCell, removeElement }) {

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
        <Draggable handle="strong">
            <main className="filter">
                <div className="filter__title">
                    <span className="title-block__icon">
                        <img className="filter-icon" alt="arrow" src={filterIcon} />
                    </span>
                    <span className="title-block__name">filters</span>
                    <strong className="title-block__close-button">
                        <img className="close-button" alt="arrow" src={closeButton} />
                    </strong>
                </div>
                <div className="filter__conditions">
                    <FiltersList changeContext={changeContext} currentContext={filters} title="topic" />
                    <hr />
                    <FiltersList changeContext={changeDimensions} currentContext={cellsForFilter} title="section" />
                    <hr />
                    <FilterSection changeResult={changeResult} currentElements={elementsForFilter} />
                    <hr />
                </div>
            </main>
        </Draggable>
    );
}
