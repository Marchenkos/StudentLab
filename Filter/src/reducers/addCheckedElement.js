import { CHECKED_TABLE, CHECKED_CELL, CHECKED_ELEMENT } from "../actions/checkedElements";

export const defaultState = {
    filters: [],
    currentTables: [],
    currentCells: [],
    result: []
};

export default function addCheckedElement(state = defaultState, action) {
    switch (action.type) {
    case CHECKED_TABLE:
        return {
            ...state,
            currentTables: [...state.currentTables, ...action.checkedTable]
        };
    case CHECKED_CELL:
        return {
            ...state,
            currentCells: [...state.currentCells, ...action.checkedCell]
        };
    case CHECKED_ELEMENT:
        return {
            ...state,
            result: [...state.result, ...action.checkedElement]
        };
    default:
        return state;
    }
}
