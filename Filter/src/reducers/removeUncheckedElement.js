import { UNCHECKED_TABLE, UNCHECKED_CELL, UNCHECKED_ELEMENT } from "../actions/uncheckedElements";

export const defaultState = {
    filters: [],
    currentTables: [],
    currentCells: [],
    result: []
};

export default function removeUncheckedElement(state = defaultState, action) {
    switch (action.type) {
    case UNCHECKED_TABLE:
        return {
            ...state,
            currentTables: state.currentTables.filter(tableName => tableName !== action.uncheckedTable)
        };
    case UNCHECKED_CELL:
        return {
            ...state,
            currentCells: state.currentCells.filter(a => a !== action.uncheckedCell)
        };
    case UNCHECKED_ELEMENT:
        return {
            ...state,
            result: state.result.filter(elementName => elementName !== action.uncheckedElement)
        };
    default:
        return state;
    }
}
