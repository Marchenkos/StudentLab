/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback, useEffect } from "react";
import arrowPng from "../img/arow.png";
import "../style/context.less";

export default function Context({ changeContext, currentContext }) {
    const [isShowList, setShowList] = useState(false);
    const [listOfTables, setListOfTables] = useState([]);

    const checkTable = useCallback(e => {
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

        setListOfTables(list);
    }, [currentContext]);


    return (
        <div className="contexts-box">
            <span className="contexts-box__open-button" onClick={showList}>
                <img className="arow-button" alt="arrow" src={arrowPng} />
            </span>
            <div className="contexts-box__title">Contexts</div>
            <div className="conditionsForRilter">
                {(isShowList && listOfTables)
                    ? listOfTables.map((tableName, index) => (
                        <p key={index}>
                            <input type="checkbox" value={tableName} onChange={checkTable} />
                            {tableName}
                        </p>
                    ))
                    : null}
            </div>
        </div>
    );
}
