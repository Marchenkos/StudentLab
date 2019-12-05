import { CHECKED_FILTERS, UNCHECKED_FILTERS } from "../actions/checkedFilter";

export const defaultState = {
    currentFilters: []
};

export default function filtersListReducer(state = defaultState, action) {
    switch (action.type) {
    case CHECKED_FILTERS:
        return {
            ...state,
            currentFilters: action.filterNames
        };
    case UNCHECKED_FILTERS:
        return {
            ...state,
            currentFilters: action.filterNames
        };
    default:
        return state;
    }
}
