import React from "react";
import SelectedFilterList from "./SelectedFilterList";
import "../style/emptyBlock.less";

export default function TitleForFilterSections({ selectedContext, arrowImg, title }) {
    return (
        <>
            <img className="arow-button" alt="arrow" src={arrowImg} />
            <span className="section-title">{title}</span>
            <SelectedFilterList selectedFilter={selectedContext} />
        </>
    );
}
