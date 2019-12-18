import React from "react";
import { shallow } from "enzyme";
import search from "../../img/search.png";
import SearchSection from "../../components/SearchSection";

const { describe, it, expect } = global;

describe("Test for component, which renders elements for search filters", () => {
    const props = {
        sortFilters: ["one", "two", "three"],
        searchByName: () => {}
    };
    const wrapper = shallow(<SearchSection {...props} />);
    const block = wrapper.find(".search-section");

    it("Component renders icon for search", () => {
        expect(block.find(".search-button").length).toBe(1);
    });

    it("Component renders search string", () => {
        expect(block.find(".search_section__search-name").length).toBe(1);
    });

    it("Component renders drop-down list", () => {
        const expectedModes = ["completeMatch", "startWith", "partialeMatch"];
        let count = 0;

        expect(block.find(".conditions__modeList").length).toBe(1);
        expect(block.find(".conditions__modeList").children().length).toBe(3);
        block.find(".conditions__modeList").children().forEach(child => {
            expect(child.prop("value")).toEqual(expectedModes[count]);
            count++;
        });
    });

    it("Component renders button for changing the mode", () => {
        expect(block.find(".conditions__alphabet").text()).toBe("A-Z");
    });
});
