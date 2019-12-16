import filterCells from "../../reducers/filterEementReducer";
import { CHECKED_ELEMENT } from "../../actions/checkedElements";
import { UNCHECKED_ELEMENT } from "../../actions/uncheckedElements";
import { LOAD_ELEMENTS } from "../../actions/loadFilterState";

const { describe, it, expect } = global;

describe("Reducer for change filters in element section", () => {
    const initialState = {
        result: ["Sia", "Ed Sheeran", "Michael Jackson"],
    };

    it("Get a checked filter in element section", () => {
        const filterName = "Bon Jovi";
        const expectedFilterList = ["Sia", "Ed Sheeran", "Michael Jackson", "Bon Jovi"];
        const action = {
            type: CHECKED_ELEMENT,
            checkedElement: filterName
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            result: expectedFilterList
        });
    });

    it("Get an unchecked filter in element section", () => {
        const filterName = "Sia";
        const expectedFilterList = ["Ed Sheeran", "Michael Jackson"];
        const action = {
            type: UNCHECKED_ELEMENT,
            uncheckedElement: filterName
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            result: expectedFilterList
        });
    });

    it("Get filters to load them into cells section", () => {
        const filters = ["Harry Potter", "The Hobbit"];
        const action = {
            type: LOAD_ELEMENTS,
            elements: filters
        };

        expect(filterCells(initialState, action)).toEqual({
            ...initialState,
            result: filters
        });
    });
});
