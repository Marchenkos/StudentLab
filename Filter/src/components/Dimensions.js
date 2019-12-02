import React from "react";
import arrowPng from "../img/arow.png";
import "../style/dimensions.less";

export default function Dimensions() {
    return (
        <div className="dimensions-box">
            <span className="dimensions-box__open-button">
                <img className="arow-button" alt="arrow" src={arrowPng} />
            </span>
            <div className="dimensions-box__title">Dimensions</div>
        </div>
    );
}
