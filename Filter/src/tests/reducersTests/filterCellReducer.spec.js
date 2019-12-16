import filterCells from "../../reducers/filterCellReducer";
import { CHECKED_CELL } from "../../actions/checkedElements";
import { UNCHECKED_CELL } from "../../actions/uncheckedElements";
import { LOAD_CELLS } from "../../actions/loadFilterState";

const { describe, it, expect } = global;

describe("Reducer for change filters in cell section", () => {
    const initialState = {
        currentCells: ["horror", "novel", "rock", "pop"]
    };

    it("Get a checked filter in cells section", () => {
        const filterName = "reggae";
        const expectedFilterList = ["horror", "novel", "rock", "pop", "reggae"];
        const action = {
            type: CHECKED_CELL,
            checkedCell: filterName
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            currentCells: expectedFilterList
        });
    });

    it("Get an unchecked filter in cells section", () => {
        const filterName = "novel";
        const expectedFilterList = ["horror", "rock", "pop"];
        const action = {
            type: UNCHECKED_CELL,
            uncheckedCell: filterName
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            currentCells: expectedFilterList
        });
    });

    it("Get filters to load them into cells section", () => {
        const filters = ["comedy", "story", "rock", "jazz"];
        const action = {
            type: LOAD_CELLS,
            cells: filters
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            currentCells: filters
        });
    });
});
