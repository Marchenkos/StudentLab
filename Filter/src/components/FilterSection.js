/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from "react";
import arrowPng from "../img/arow.png";
import "../style/context.less";

export default function FilterSection({ changeResult, currentElements }) {
    const [isShowList, setShowList] = useState(false);

    const checkElements = useCallback(e => {
        changeResult(e.target.value);
    }, []);

    const showList = () => {
        setShowList(!isShowList);
    };

    return (
        <div className="contexts-box">
            <span className="contexts-box__open-button" onClick={showList}>
                <img className="arow-button" alt="arrow" src={arrowPng} />
            </span>
            <div className="contexts-box__title">Contexts</div>
            <div className="conditionsForRilter">
                {(isShowList && currentElements)
                    ? currentElements.map((tableName, index) => <input type="checkbox" key={index} value={tableName} onClick={checkElements} />)
                    : null}
            </div>
        </div>
    );
}
