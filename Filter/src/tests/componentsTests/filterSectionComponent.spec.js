import React from "react";
import { shallow } from "enzyme";
import FilterSection from "../../components/FilterSection";
import CheckboxList from "../../components/СheckboxList";
import TitleForFilterSections from "../../components/TitleForFilterSections";

const { describe, it, expect } = global;

describe("Component that contain list of filter", () => {
    const props = {
        currentContext: {},
        title: "Filters",
        changeContext: () => {},
        selectedContext: () => {}
    };
    const wrapper = shallow(<FilterSection {...props} />);

    it("Pass prop to child component", () => {
        const { title, selectedContext } = props;
        const TitleComponent = wrapper.find(TitleForFilterSections);

        expect(TitleComponent.prop("selectedContext")).toEqual(selectedContext);
        expect(TitleComponent.prop("title")).toEqual(title);
    });

    it("Show CheckboxList component after click on the button", () => {
        const button = wrapper.find(".contexts-box__open-button");
        expect(wrapper.find(CheckboxList).length).toBe(0);

        button.simulate("click");

        const Checkboxes = wrapper.find(CheckboxList);

        expect(wrapper.find(CheckboxList).length).toBe(1);
        expect(Checkboxes.prop("selectedContext")).toEqual(props.selectedContext);
    });
});
