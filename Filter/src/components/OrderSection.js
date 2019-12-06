import React, { useCallback } from "react";
import "../style/order-section.less";

export default function OrderSection({ filtersList, sortFilters }) {
    const alphabeticalOrder = useCallback(() => {
        const sortingArray = filtersList;
        sortFilters(sortingArray.sort());
    }, [filtersList]);

    return (
        <div className="order-section">
            <button className="order-section__alphabet" onClick={alphabeticalOrder}>A-Z</button>
        </div>
    );
}
