import React from "react";
import "../style/emptyBlock.less";

export default function CheckboxList({ filter, eventListener, selectedContext }) {
    return Object.keys(filter).length ? (filter.map((name, index) => (
        <p className="checkboxField" key={index}>
            <input type="checkbox" className="checkboxField__item" value={name} onChange={eventListener} checked={selectedContext.includes(name)} />
            {name}
        </p>
    ))

    ) : <div className="emptyBlock">Select filters above</div>;
}
