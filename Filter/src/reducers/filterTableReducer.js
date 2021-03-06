import { CHECKED_TABLE } from "../actions/checkedElements";
import { UNCHECKED_TABLE } from "../actions/uncheckedElements";
import { LOAD_TABLES } from "../actions/loadFilterState";

export const defaultState = {
    currentTables: []
};

export default function filterTables(state = defaultState, action) {
    switch (action.type) {
    case CHECKED_TABLE:
        return {
            ...state,
            currentTables: [...state.currentTables, action.checkedTable]
        };
    case UNCHECKED_TABLE:
        return {
            ...state,
            currentTables: state.currentTables.filter(tableName => tableName !== action.uncheckedTable)
        };
    case LOAD_TABLES:
        return {
            ...state,
            currentTables: action.tables
        };
    default:
        return state;
    }
}
