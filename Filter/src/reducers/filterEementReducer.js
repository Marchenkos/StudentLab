import { UNCHECKED_ELEMENT } from "../actions/uncheckedElements";
import { CHECKED_ELEMENT } from "../actions/checkedElements";

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
    default:
        return state;
    }
}
