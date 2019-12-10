import React from "react";
import "./style/emptyBlock.less";

export default function isHasFilters(filter, eventListener, selectedElements) {
    return Object.keys(filter).length ? (filter.map((name, index) => (
        selectedElements.includes(name) ? (
            <p className="checkboxField" key={index}>
                <input type="checkbox" value={name} onChange={eventListener} checked />
                {name}
            </p>
        ) : (
            <p className="checkboxField" key={index}>
                <input type="checkbox" value={name} onChange={eventListener} />
                {name}
            </p>
        )
    ))) : <div className="emptyBlock">Select filters above</div>;
}
