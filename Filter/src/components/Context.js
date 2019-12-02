import React, { useState } from "react";
import arrowPng from "../img/arow.png";
import "../style/context.less";

export default function Context() {
    // const [isShowList, setShowList] = useState(false);

    return (
        <div className="contexts-box">
            <span className="contexts-box__open-button">
                <img className="arow-button" alt="arrow" src={arrowPng} />
            </span>
            <div className="contexts-box__title">Contexts</div>
        </div>
    );
}
