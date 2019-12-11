import { UNCHECKED_ELEMENT } from "../actions/uncheckedElements";
import { CHECKED_ELEMENT } from "../actions/checkedElements";
import { LOAD_ELEMENTS } from "../actions/loadFilterState";

export const defaultState = {
    result: []
};

export default function filterEements(state = defaultState, action) {
    switch (action.type) {
    case CHECKED_ELEMENT:
        return {
            ...state,
            result: [...state.result, action.checkedElement]
        };
    case UNCHECKED_ELEMENT:
        return {
            ...state,
            result: state.result.filter(elementName => elementName !== action.uncheckedElement)
        };
    case LOAD_ELEMENTS:
        return {
            ...state,
            result: action.elements
        };
    default:
        return state;
    }
}
