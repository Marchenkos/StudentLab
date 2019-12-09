import React, { useState, useCallback, useEffect } from "react";
import isHasFilters from "../isHasFiltersFunction";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FiltersList({ changeContext, currentContext, title }) {
    const [isShowList, setShowList] = useState(false);
    const [listOfFilters, setlistOfFilters] = useState([]);

    const chooseFilter = useCallback(e => {
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
            {isShowList
                ? (
                    <>
                        <span className="contexts-box__open-button" onClick={showList}>
                            <img className="arow-button" alt="arrow" src={arrowRotatePng} />
                            {title}
                        </span>
                        <div className="conditions-for-filter">
                            {isShowList ? isHasFilters(listOfFilters, chooseFilter) : null}
                        </div>
                    </>
                )
                : (
                    <>
                        <span className="contexts-box__open-button" onClick={showList}>
                            <img className="arow-button" alt="arrow" src={arrowPng} />
                            {title}
                        </span>
                    </>
                )}
        </div>
    );
}
