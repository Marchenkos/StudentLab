import React, { useState, useCallback, useEffect } from "react";
import isHasFilters from "../isHasFiltersFunction";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FiltersList({ changeContext, currentContext, title }) {
    const [isShowList, setShowList] = useState(false);
    const [listOfFilters, setlistOfFilters] = useState([]);

    const checkFilter = useCallback(e => {
        changeContext(e.target.value, e.target.checked);
    }, []);

    const showList = () => {
        setShowList(!isShowList);
    };

    useEffect(() => {
        const list = [];

        for (const cell in currentContext) {
            list.push(cell);
        }

        setlistOfFilters(list);
    }, [currentContext]);


    return (
        <div className="contexts-box">
            <span className="contexts-box__open-button" onClick={showList}>
                {isShowList
                    ? <img className="arow-button" alt="arrow" src={arrowRotatePng} />
                    : <img className="arow-button" alt="arrow" src={arrowPng} />}
            </span>
            <div className="contexts-box__title">
                {title}
                <div className="conditionsForRilter">
                    {isShowList ? isHasFilters(listOfFilters, checkFilter) : null}
                </div>
            </div>
        </div>
    );
}
