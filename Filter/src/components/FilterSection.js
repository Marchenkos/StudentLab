import React, { useState, useCallback, useEffect } from "react";
import SearchSection from "./SearchSection";
import isHasFilters from "../isHasFiltersFunction";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FilterSection({ changeResult, currentElements, selectedFilters }) {
    const [isFiltersList, setisFiltersList] = useState(null);
    let [, setState] = useState();

    useEffect(() => {
        setisFiltersList(currentElements);
    }, [currentElements]);

    const chooseElements = useCallback(e => {
        changeResult(e.target.value, e.target.checked);
    }, []);

    const isUseSearch = () => {
        if (isFiltersList != null) {
            return isFiltersList.length > 0
                ? isHasFilters(isFiltersList, chooseElements, selectedFilters)
                : isHasFilters(currentElements, chooseElements, selectedFilters);
        } else {
            return (
                <div>Nothing search</div>
            );
        }
    };

    const changeFiltersList = value => {
        setisFiltersList(value);
        setState({});
    };

    const selectAllFilters = useCallback(e => {
        for (const filter of currentElements) {
            changeResult(filter, e.target.checked);
        }
    }, [currentElements]);

    return (
        <>
            <SearchSection sortFilters={currentElements} searchByName={changeFiltersList} />
            <div className="contexts-block">
                <div className="contexts-box">
                    <hr className="contexts-box__result-separator" />
                    {currentElements.length
                        ? (
                            <div className="contexts-box__result">
                                <p className="checkboxField checkboxField--all-filters">
                                    <input type="checkbox" onChange={selectAllFilters} />
                                    (All)
                                </p>
                                {isUseSearch()}
                            </div>
                        )
                        : null }
                </div>
            </div>
        </>
    );
}
