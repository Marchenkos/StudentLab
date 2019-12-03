/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback, useEffect } from "react";
import arrowPng from "../img/arow.png";
import "../style/dimensions.less";

export default function Dimensions({
    changeDimensions, currentDimensions }) {

    const [isShowList, setShowList] = useState(false);
    const [listOfCells, setListOfCells] = useState([]);

    const checkCell = useCallback(e => {
        changeDimensions(e.target.value);
    }, []);

    const showList = () => {
        setShowList(!isShowList);
    };

    useEffect(() => {
        const list = [];

        for (const cell in currentDimensions) {
            list.push(cell);
        }

        setListOfCells(list);
    }, [currentDimensions]);

    return (
        <div className="dimensions-box">
            <span className="dimensions-box__open-button" onClick={showList}>
                <img className="arow-button" alt="arrow" src={arrowPng} />
            </span>
            <div className="dimensions-box__title">Dimensions</div>
            <div className="conditionsForRilter">
                {(isShowList && currentDimensions)
                    ? listOfCells.map((cellName, index) => (
                        <p key={index}>
                            <input type="checkbox" value={cellName} onClick={checkCell} />
                            {cellName}
                        </p>
                    ))
                    : null}
            </div>
        </div>
    );
}
