import React, { useState, useCallback, useEffect } from "react";
import isHasFilters from "../isHasFiltersFunction";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FiltersList({ changeContext, currentContext, selectedContext, title }) {
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
                        <div className="contexts-box__open-button" onClick={showList}>
                            <img className="arow-button" alt="arrow" src={arrowRotatePng} />
                            <span className="section-title">{title}</span>
                            {selectedContext ? (
                                <span className="selectedFilters">
                                    {selectedContext.map(item => (item != selectedContext[selectedContext.length - 1]
                                        ? `${item}, `
                                        : `${item}`))}
                                </span>
                            ) : null}
                        </div>
                        <hr className="section-top-border" />
                        <div className="contexts-box__conditions-for-filter">
                            {isShowList ? isHasFilters(listOfFilters, chooseFilter, selectedContext) : null}
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="contexts-box__open-button" onClick={showList}>
                            <img className="arow-button" alt="arrow" src={arrowPng} />
                            <span className="section-title">{title}</span>
                            {selectedContext ? (
                                <span className="selectedFilters">
                                    {selectedContext.map(item => (item != selectedContext[selectedContext.length - 1]
                                        ? `${item}, `
                                        : `${item}`))}
                                </span>
                            ) : null}
                        </div>
                    </>
                )}
        </div>
    );
}
