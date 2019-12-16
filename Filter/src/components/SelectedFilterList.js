import React from "react";
import "../style/emptyBlock.less";

export default function SelectedFilterList({ selectedFilter }) {
    return (
        <span className="selectedFilters">
            {selectedFilter.map(item => (item != selectedFilter[selectedFilter.length - 1]
                ? `${item}, `
                : `${item}`))}
        </span>
    );
}
