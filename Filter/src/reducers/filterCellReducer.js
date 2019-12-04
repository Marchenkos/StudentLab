import { CHECKED_CELL } from "../actions/checkedElements";
import { UNCHECKED_CELL } from "../actions/uncheckedElements";

export const defaultState = {
    currentCells: []
};

export default function filterCells(state = defaultState, action) {
    switch (action.type) {
    case CHECKED_CELL:
        return {
            ...state,
            currentCells: [...state.currentCells, action.checkedCell]
        };
    case UNCHECKED_CELL:
        return {
            ...state,
            currentCells: state.currentCells.filter(cellName => cellName !== action.uncheckedCell)
        };
    default:
        return state;
    }
}
