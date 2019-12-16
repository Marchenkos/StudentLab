import React from "react";
import { shallow } from "enzyme";
import SelectedFilterList from "../../components/SelectedFilterList";

const { describe, it, expect } = global;

describe("Component that render string with selected filters", () => {
    const props = {
        selectedFilter: ["one", "two", "three"]
    };
    const wrapper = shallow(<SelectedFilterList {...props} />);

    it("Render a string of items from selected filters", () => {
        const expectedString = "one, two, three";

        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.find("span").text()).toBe(expectedString);
    });
});
