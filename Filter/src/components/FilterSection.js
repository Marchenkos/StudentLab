import React, { useState, useCallback, useEffect } from "react";
import SearchSection from "./SearchSection";
import OrderSection from "./OrderSection";
import isHasFilters from "../isHasFiltersFunction";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FilterSection({ changeResult, currentElements }) {
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
                ? isHasFilters(isFiltersList, chooseElements)
                : isHasFilters(currentElements, chooseElements);
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
            <OrderSection filtersList={currentElements} sortFilters={changeFiltersList} />

            <div className="contexts-box">
                {isShowList
                    ? (
                        <>
                            <span className="contexts-box__open-button" onClick={showList}>
                                <img className="arow-button" alt="arrow" src={arrowRotatePng} />
                            </span>
                            <div className="contexts-box__title">
                                        Elements
                                <div className="conditionsForRilter">
                                    {currentElements ? isUseSearch() : null}
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <span className="contexts-box__open-button" onClick={showList}>
                                <img className="arow-button" alt="arrow" src={arrowPng} />
                            </span>
                            <div className="contexts-box__title">
                                    Elements
                            </div>
                        </>
                    )}
            </div>
        </>
    );
}
