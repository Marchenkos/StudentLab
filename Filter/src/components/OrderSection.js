import React, { useCallback } from "react";

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
