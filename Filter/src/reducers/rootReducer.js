import { combineReducers } from "redux";
import filterEements from "./filterEementReducer";
import filterCells from "./filterCellReducer";
import filterTables from "./filtersListReducer";

export default combineReducers({
    filterEements,
    filterCells,
    filterTables
});
