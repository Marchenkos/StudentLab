import React from "react";
import "../style/emptyBlock.less";

export default function SelectedFilterList({ selectedFilter }) {
    return (
        <span className="selectedFilters">
            {selectedFilter.length > 0 ? selectedFilter.map(item => (item != selectedFilter[selectedFilter.length - 1]
                ? `${item}, `
                : `${item}`))
                : null}
        </span>
    );
}
