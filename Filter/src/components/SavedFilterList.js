import React from "react";
import "../style/emptyBlock.less";

export default function SavedFilterList({ selectItem, list }) {
    return (
        <select className="manage-block__listOfSavedFilters" onChange={selectItem}>
            {
                list.map((name, index) => (
                    <option className="filters__item" key={index} value={index}>{`State ${index + 1}`}</option>
                ))
            }
        </select>
    );
}
