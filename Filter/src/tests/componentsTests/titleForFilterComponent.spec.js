import React from "react";
import { shallow } from "enzyme";
import TitleForFilter from "../../components/TitleForFilter";

const { describe, it, expect } = global;

describe("Component that render main title for filter", () => {
    const wrapper = shallow(<TitleForFilter />);

    it("Render three children: title and two img", () => {
        const block = wrapper.find("article");
        const expectedTitle = "filters";

        expect(block.children().length).toBe(3);
        expect(block.find("img").length).toBe(2);
        expect(block.find("span").length).toBe(1);
        expect(block.find("span").text()).toEqual(expectedTitle);
    });
});
