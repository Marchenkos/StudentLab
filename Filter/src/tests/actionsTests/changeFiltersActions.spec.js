import * as checkActions from "../../actions/checkedElements";
import * as loadActions from "../../actions/loadFilterState";
import * as uncheckActions from "../../actions/uncheckedElements";

const { describe, it, expect } = global;

describe("Test for creating an action", () => {
    it("CHECKED_TABLE action creates correctly", () => {
        const filterName = "films";
        const expectedAction = {
            type: checkActions.CHECKED_TABLE,
            checkedTable: filterName
        };

        expect(checkActions.checkedTable(filterName)).toEqual(expectedAction);
    });

    it("CHECKED_CELL action creates correctly", () => {
        const filterName = "horror";
        const expectedAction = {
            type: checkActions.CHECKED_CELL,
            checkedCell: filterName
        };

        expect(checkActions.checkedCell(filterName)).toEqual(expectedAction);
    });

    it("CHECKED_ELEMENT action creates correctly", () => {
        const filterName = "Aliens";
        const expectedAction = {
            type: checkActions.CHECKED_ELEMENT,
            checkedElement: filterName
        };

        expect(checkActions.checkedElement(filterName)).toEqual(expectedAction);
    });

    it("UNCHECKED_TABLE action creates correctly", () => {
        const filterName = "films";
        const expectedAction = {
            type: uncheckActions.UNCHECKED_TABLE,
            uncheckedTable: filterName
        };

        expect(uncheckActions.uncheckedTable(filterName)).toEqual(expectedAction);
    });

    it("UNCHECKED_CELL action creates correctly", () => {
        const filterName = "horror";
        const expectedAction = {
            type: uncheckActions.UNCHECKED_CELL,
            uncheckedCell: filterName
        };

        expect(uncheckActions.uncheckedCell(filterName)).toEqual(expectedAction);
    });

    it("UNCHECKED_ELEMENT action creates correctly", () => {
        const filterName = "Aliens";
        const expectedAction = {
            type: uncheckActions.UNCHECKED_ELEMENT,
            uncheckedElement: filterName
        };

        expect(uncheckActions.uncheckedElement(filterName)).toEqual(expectedAction);
    });

    it("LOAD_TABLES action creates correctly", () => {
        const filterName = ["music", "films"];
        const expectedAction = {
            type: loadActions.LOAD_TABLES,
            tables: filterName
        };

        expect(loadActions.loadTables(filterName)).toEqual(expectedAction);
    });

    it("LOAD_CELLS action creates correctly", () => {
        const filterName = ["horror", "novel"];
        const expectedAction = {
            type: loadActions.LOAD_CELLS,
            cells: filterName
        };

        expect(loadActions.loadCells(filterName)).toEqual(expectedAction);
    });

    it("LOAD_ELEMENTS action creates correctly", () => {
        const filterName = ["The Hot Chick", "Dumb and Dumber", "Bean"];
        const expectedAction = {
            type: loadActions.LOAD_ELEMENTS,
            elements: filterName
        };

        expect(loadActions.loadElements(filterName)).toEqual(expectedAction);
    });
});
