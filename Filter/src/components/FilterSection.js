import React, { useState, useCallback, useEffect } from "react";
import SearchSection from "./SearchSection";
import isHasFilters from "../isHasFiltersFunction";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FilterSection({ changeResult, currentElements, selectedFilters }) {
    const [isShowList, setShowList] = useState(false);
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

    const showList = () => {
        setShowList(!isShowList);
    };

    return (
        <>
            <SearchSection sortFilters={currentElements} searchByName={changeFiltersList} />
            <div className="contexts-block">
                {isShowList
                    ? (
                        <div className="contexts-box">
                            <div className="contexts-box__title" onClick={showList}>
                                <img className="arow-button" alt="arrow" src={arrowRotatePng} />
                                Elements
                            </div>
                            <div className="conditions-for-filter">
                                {currentElements ? isUseSearch() : null}
                            </div>
                        </div>
                    )
                    : (
                        <div className="contexts-box">
                            <div className="contexts-box__title" onClick={showList}>
                                <img className="arow-button" alt="arrow" src={arrowPng} />
                                    Elements
                            </div>
                        </div>
                    )}
            </div>
        </>
    );
}
