import { CHECKED_TABLE } from "../actions/checkedElements";
import { UNCHECKED_TABLE } from "../actions/uncheckedElements";

export const defaultState = {
    currentTables: []
};

export default function filterTables(initialState = defaultState, action) {
    switch (action.type) {
    case CHECKED_TABLE:
        return {
            ...initialState,
            currentTables: [...initialState.currentTables, action.checkedTable]
        };
    case UNCHECKED_TABLE:
        return {
            ...initialState,
            currentTables: initialState.currentTables.filter(tableName => tableName !== action.uncheckedTable)
        };
    default:
        return initialState;
    }
}
