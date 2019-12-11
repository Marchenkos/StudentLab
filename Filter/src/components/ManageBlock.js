import React, { useState, useCallback } from "react";

export default function ManageBlock({ currentTables, currentCells, result, loadSavedStatus }) {
    const [listOfState, setListOfState] = useState([]);
    const [selectedState, setSelectedState] = useState(0);

    const loadState = useCallback(() => {
        if (listOfState.length > 0) {
            const { savedTables, savedCells, savedElements } = listOfState[Number(selectedState)];
            loadSavedStatus(savedTables, savedCells, savedElements);
        }
    }, [selectedState]);

    const selectState = useCallback(e => {
        setSelectedState(e.target.value);
    }, []);

    const saveState = useCallback(e => {
        let newState = {
            savedTables: currentTables,
            savedCells: currentCells,
            savedElements: result
        };

        setListOfState([...listOfState, newState]);
    }, [currentTables, currentCells, result]);

    return (
        <div className="manage-block">
            <button className="manage-block__loadButton" onClick={loadState}>Load</button>
            <button className="manage-block__saveButton" onClick={saveState}>Save</button>
            {listOfState.length == 0 ? null
                : (
                    <select className="manage-block__listOfSavedFilters" onChange={selectState}>
                        {
                            listOfState.map((name, index) => (
                                <option key={index} value={index}>{`State ${index + 1}`}</option>))
                        }
                    </select>
                )}
        </div>
    );
}
