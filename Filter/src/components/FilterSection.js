import React, { useState, useCallback } from "react";
import isHasFilters from "../isHasFiltersFunction";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FilterSection({ changeResult, currentElements }) {
    const [isShowList, setShowList] = useState(false);

    const checkElements = useCallback(e => {
        changeResult(e.target.value, e.target.checked);
    }, []);

    const showList = () => {
        setShowList(!isShowList);
    };

    return (
        <div className="contexts-box">
            <span className="contexts-box__open-button" onClick={showList}>
                {isShowList
                    ? <img className="arow-button" alt="arrow" src={arrowRotatePng} />
                    : <img className="arow-button" alt="arrow" src={arrowPng} />}
            </span>
            <div className="contexts-box__title">
                Elements
                <div className="conditionsForRilter">
                    {isShowList && currentElements ? isHasFilters(currentElements, checkElements) : null}
                </div>
            </div>
        </div>
    );
}