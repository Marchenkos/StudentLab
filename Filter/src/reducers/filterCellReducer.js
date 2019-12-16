import { CHECKED_CELL } from "../actions/checkedElements";
import { UNCHECKED_CELL } from "../actions/uncheckedElements";
import { LOAD_CELLS } from "../actions/loadFilterState";

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
    case LOAD_CELLS:
        return {
            ...state,
            currentCells: action.cells
        };
    default:
        return state;
    }
}
