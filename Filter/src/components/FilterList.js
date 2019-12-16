import React, { useState, useCallback, useEffect } from "react";
import SearchSection from "./SearchSection";
import CheckboxList from "./СheckboxList";
import "../style/context.less";

export default function FilterList({ changeResult, currentElements, selectedFilters }) {
    const [isFiltersList, setisFiltersList] = useState(null);
    let [, setState] = useState();

    useEffect(() => {
        setisFiltersList(currentElements);
    }, [currentElements]);

    const chooseElements = useCallback(e => {
        changeResult(e.target.value, e.target.checked);
    }, []);

    const selectAllFilters = useCallback(e => {
        for (const filter of currentElements) {
            changeResult(filter, e.target.checked);
        }
    }, [currentElements]);

    const getResult = () => {
        if (isFiltersList != null) {
            return isFiltersList.length > 0
                ? <CheckboxList filter={isFiltersList} eventListener={chooseElements} selectedContext={selectedFilters} />
                : <CheckboxList filter={currentElements} eventListener={chooseElements} selectedContext={selectedFilters} />;
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

    return (
        <>
            <SearchSection sortFilters={currentElements} searchByName={changeFiltersList} />
            <div className="contexts-box">
                <hr className="contexts-box__result-separator" />
                {currentElements.length
                    ? (
                        <div className="contexts-box__result">
                            <p className="checkboxField checkboxField--all-filters">
                                <input type="checkbox" onChange={selectAllFilters} />
                                (All)
                            </p>
                            {getResult()}
                        </div>
                    )
                    : null }
            </div>
        </>
    );
}
