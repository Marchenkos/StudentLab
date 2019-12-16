import filterCells from "../../reducers/filterTableReducer";
import { CHECKED_TABLE } from "../../actions/checkedElements";
import { UNCHECKED_TABLE } from "../../actions/uncheckedElements";
import { LOAD_TABLES } from "../../actions/loadFilterState";

const { describe, it, expect } = global;

describe("Reducer for change filters in table section", () => {
    const initialState = {
        currentTables: ["pictures", "films"]
    };

    it("Get a checked filter in table section", () => {
        const filterName = "books";
        const expectedFilterList = ["pictures", "films", "books"];
        const action = {
            type: CHECKED_TABLE,
            checkedTable: filterName
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            currentTables: expectedFilterList
        });
    });

    it("Get an unchecked filter in table section", () => {
        const filterName = "films";
        const expectedFilterList = ["pictures"];
        const action = {
            type: UNCHECKED_TABLE,
            uncheckedTable: filterName
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            currentTables: expectedFilterList
        });
    });

    it("Get filters to load them into table section", () => {
        const filters = ["music", "films"];
        const action = {
            type: LOAD_TABLES,
            tables: filters
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            currentTables: filters
        });
    });
});
