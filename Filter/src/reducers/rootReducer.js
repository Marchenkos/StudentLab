import { combineReducers } from "redux";
import removeUncheckedElement from "./removeUncheckedElement";
import addCheckedElement from "./addCheckedElement";

export default combineReducers({
    checkedElements: addCheckedElement,
    uncheckedElements: removeUncheckedElement
});
