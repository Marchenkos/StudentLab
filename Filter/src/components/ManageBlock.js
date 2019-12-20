import React, { useState, useCallback } from "react";
import SavedFilterList from "./SavedFilterList";

export default function ManageBlock({ currentTables, currentCells, result, loadSavedStatus }) {
    const [listOfState, setListOfState] = useState([]);
    const [selectedStates, setSelectedStates] = useState(0);

    const selectState = useCallback(e => setSelectedStates(e.target.value), []);

    const loadState = useCallback(() => {
        if (listOfState.length > 0) {
            const { savedTables, savedCells, savedElements } = listOfState[Number(selectedStates)];
            loadSavedStatus(savedTables, savedCells, savedElements);
        }
    }, [selectedStates]);

    const saveState = useCallback(() => {
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
                    <SavedFilterList selectItem={selectState} list={listOfState} />
                )}
        </div>
    );
}
