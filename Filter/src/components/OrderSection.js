import React from "react";
import "../style/order-section.less";

export default function OrderSection() {
    return (
        <div className="order-section">
            <button className="order-section__type-of-search">--</button>
            <button className="order-section__alphabet">A-Z</button>
        </div>
    );
}
