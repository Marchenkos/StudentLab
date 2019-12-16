import React from "react";
import filterIcon from "../img/filterIcon.png";
import closeButton from "../img/delete-cross.png";
import "../style/emptyBlock.less";

export default function TitleForFilter() {
    return (
        <article className="filter__title">
            <div className="title-block__icon">
                <img className="filter-icon" alt="arrow" src={filterIcon} />
            </div>
            <span className="title-block__name">filters</span>
            <div className="title-block__close-button">
                <img className="close-button" alt="arrow" src={closeButton} />
            </div>
        </article>
    );
}
