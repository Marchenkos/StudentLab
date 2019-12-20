import React from "react";
import { shallow } from "enzyme";
import TitleForFilter from "../../components/TitleForFilter";

const { describe, it, expect } = global;

describe("Test for component which renders main title", () => {
    const wrapper = shallow(<TitleForFilter />);
    const block = wrapper.find("article");

    it("Component renders title for filter", () => {
        const expectedTitle = "filters";

        expect(block.find("span").length).toBe(1);
        expect(block.find("span").text()).toEqual(expectedTitle);
    });

    it("Component renders two icons", () => {
        expect(block.find("img").length).toBe(2);
    });
});
