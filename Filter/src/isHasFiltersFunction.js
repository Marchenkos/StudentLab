import React from "react";
import "./style/emptyBlock.less";

export default function isHasFilters(filter, eventListener, listOfFiters = filter) {
    return Object.keys(filter).length ? (listOfFiters.map((name, index) => (
        <p className="checkboxField" key={index}>
            <input type="checkbox" value={name} onChange={eventListener} />
            {name}
        </p>
    ))) : <div className="emptyBlock">Select filters</div>;
}
