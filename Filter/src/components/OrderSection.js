import React, { useCallback } from "react";
import "../style/order-section.less";

export default function OrderSection({ filtersList, sortFilters }) {
    const alphabeticalOrder = useCallback(() => {
        sortFilters(filtersList.sort());
    }, [filtersList]);

    return (
        <div className="order-section">
            <button className="order-section__alphabet" onClick={alphabeticalOrder}>A-Z</button>
        </div>
    );
}
