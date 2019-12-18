import React from "react";
import { shallow } from "enzyme";
import SelectedFilterList from "../../components/SelectedFilterList";

const { describe, it, expect } = global;

describe("Test for component which renders names of selected filters", () => {
    it("Component renders names if selectedFilter isn't empty", () => {
        const props = {
            selectedFilter: ["one", "two", "three"]
        };
        const wrapper = shallow(<SelectedFilterList {...props} />);
        const expectedString = "one, two, three";

        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.find("span").text()).toBe(expectedString);
    });

    it("Component renders empty string if selectedFilter is empty", () => {
        const props = {
            selectedFilter: []
        };
        const wrapper = shallow(<SelectedFilterList {...props} />);
        const expectedString = "";

        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.find("span").text()).toBe(expectedString);
    });
});
