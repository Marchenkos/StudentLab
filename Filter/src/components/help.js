/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import arrowPng from "../img/arow.png";

export default function Help() {
    const [isShowList, setShowList] = useState(false);
    const checkTable = () => {
        setShowList(!isShowList);
    };

    return (
        <div className="contexts-box">
            <span className="contexts-box__open-button" onClick={checkTable}>
                <img className="arow-button" alt="arrow" src={arrowPng} />
            </span>
        </div>
    );
}
