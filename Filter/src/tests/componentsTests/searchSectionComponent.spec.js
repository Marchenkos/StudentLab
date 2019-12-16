import React from "react";
import { shallow } from "enzyme";
import search from "../../img/search.png";
import SearchSection from "../../components/SearchSection";

const { describe, it, expect } = global;

describe("Component that contain elements for search filters", () => {
    const props = {
        sortFilters: ["one", "two", "three"],
        searchByName: () => {}
    };
    const wrapper = shallow(<SearchSection {...props} />);

    it("Render five child elements", () => {
        const block = wrapper.find("div");

        expect(block.children().length).toBe(5);
        expect(block.find("select").children().length).toBe(3);
        expect(block.find("input").length).toBe(1);
        expect(block.find("button").length).toBe(1);
        expect(block.find("button").text()).toBe("A-Z");
        expect(block.find("img").length).toBe(1);
    });

    it("Render one input field, img, button and select element fwith 3 children", () => {
        const block = wrapper.find("div");
        const buttonCase = wrapper.find(".conditions__alphabet");

        buttonCase.simulate("click");

        expect(block.find("button").text()).toBe("A-Z");
    });
});
