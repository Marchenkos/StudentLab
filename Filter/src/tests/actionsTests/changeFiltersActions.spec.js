import * as checkActions from "../../actions/checkedElements";
import * as loadActions from "../../actions/loadFilterState";
import * as uncheckActions from "../../actions/uncheckedElements";

const { describe, it, expect } = global;

describe("Test action to select filter in other section", () => {
    it("Get a checked filter in table section", () => {
        const filterName = "films";
        const expectedAction = {
            type: checkActions.CHECKED_TABLE,
            checkedTable: filterName
        };

        expect(checkActions.checkedTable(filterName)).toEqual(expectedAction);
    });

    it("Get a checked filter in cells section", () => {
        const filterName = "horror";
        const expectedAction = {
            type: checkActions.CHECKED_CELL,
            checkedCell: filterName
        };

        expect(checkActions.checkedCell(filterName)).toEqual(expectedAction);
    });

    it("Get a checked filter in element section", () => {
        const filterName = "Aliens";
        const expectedAction = {
            type: checkActions.CHECKED_ELEMENT,
            checkedElement: filterName
        };

        expect(checkActions.checkedElement(filterName)).toEqual(expectedAction);
    });

    it("Get an unchecked filter in table section", () => {
        const filterName = "films";
        const expectedAction = {
            type: uncheckActions.UNCHECKED_TABLE,
            uncheckedTable: filterName
        };

        expect(uncheckActions.uncheckedTable(filterName)).toEqual(expectedAction);
    });

    it("Get an unchecked filter in cells section", () => {
        const filterName = "horror";
        const expectedAction = {
            type: uncheckActions.UNCHECKED_CELL,
            uncheckedCell: filterName
        };

        expect(uncheckActions.uncheckedCell(filterName)).toEqual(expectedAction);
    });

    it("Get an unchecked filter in element section", () => {
        const filterName = "Aliens";
        const expectedAction = {
            type: uncheckActions.UNCHECKED_ELEMENT,
            uncheckedElement: filterName
        };

        expect(uncheckActions.uncheckedElement(filterName)).toEqual(expectedAction);
    });

    it("Get filters to load them into table section", () => {
        const filterName = ["music", "films"];
        const expectedAction = {
            type: loadActions.LOAD_TABLES,
            tables: filterName
        };

        expect(loadActions.loadTables(filterName)).toEqual(expectedAction);
    });

    it("Get filters to load them into cells section", () => {
        const filterName = ["horror", "novel"];
        const expectedAction = {
            type: loadActions.LOAD_CELLS,
            cells: filterName
        };

        expect(loadActions.loadCells(filterName)).toEqual(expectedAction);
    });

    it("Get filters to load them into element section", () => {
        const filterName = ["The Hot Chick", "Dumb and Dumber", "Bean"];
        const expectedAction = {
            type: loadActions.LOAD_ELEMENTS,
            elements: filterName
        };

        expect(loadActions.loadElements(filterName)).toEqual(expectedAction);
    });
});
