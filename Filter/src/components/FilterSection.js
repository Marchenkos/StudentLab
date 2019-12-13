import React, { useState, useCallback, useEffect } from "react";
import CheckboxList from "./СheckboxList";
import TitleForFilterSections from "./TitleForFilterSections";
import arrowPng from "../img/arow.png";
import arrowRotatePng from "../img/arowTranform.png";
import "../style/context.less";

export default function FilterSection({ changeContext, currentContext, selectedContext, title }) {
    const [isShowList, setShowList] = useState(false);
    const [listOfFilters, setlistOfFilters] = useState([]);

    useEffect(() => {
        const list = [];

        for (const cell in currentContext) {
            list.push(cell);
        }

        setlistOfFilters(list);
    }, [currentContext]);

    const chooseFilter = useCallback(e => {
        changeContext(e.target.value, e.target.checked);
    }, []);

    const showList = () => {
        setShowList(!isShowList);
    };

    return (
        <div className="contexts-box">
            {isShowList
                ? (
                    <>
                        <div className="contexts-box__open-button" onClick={showList}>
                            <TitleForFilterSections selectedContext={selectedContext} arrowImg={arrowRotatePng} title={title} />
                        </div>
                        <hr className="section-top-border" />
                        <div className="contexts-box__conditions-for-filter">
                            {isShowList
                                ? <CheckboxList filter={listOfFilters} eventListener={chooseFilter} selectedContext={selectedContext} />
                                : null}
                        </div>
                    </>
                )
                : (
                    <div className="contexts-box__open-button" onClick={showList}>
                        <TitleForFilterSections selectedContext={selectedContext} arrowImg={arrowPng} title={title} />
                    </div>
                )}
        </div>
    );
}
