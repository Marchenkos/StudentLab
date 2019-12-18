import React from "react";
import { shallow } from "enzyme";
import FilterSection from "../../components/FilterSection";
import CheckboxList from "../../components/СheckboxList";
import TitleForFilterSections from "../../components/TitleForFilterSections";

const { describe, it, expect } = global;

describe("Test for component which renders filter section", () => {
    const props = {
        currentContext: {},
        title: "Filters",
        changeContext: () => {},
        selectedContext: () => {}
    };
    const wrapper = shallow(<FilterSection {...props} />);

    it("Component renders the title component for section", () => {
        expect(wrapper.find(TitleForFilterSections).length).toEqual(1);
    });

    it("Component shows the filters after clicking on the button", () => {
        const button = wrapper.find(".contexts-box__open-button");
        expect(wrapper.find(CheckboxList).length).toBe(0);

        button.simulate("click");
        expect(wrapper.find(CheckboxList).length).toBe(1);
    });
});
