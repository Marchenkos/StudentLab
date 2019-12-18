import React from "react";
import { shallow } from "enzyme";
import SelectedFilterList from "../../components/SelectedFilterList";
import TitleForFilterSections from "../../components/TitleForFilterSections";

const { describe, it, expect } = global;

describe("Test for component, which renders title for section", () => {
    const props = {
        selectedContext: [],
        arrowImg: "img.png",
        title: "title"
    };
    const wrapper = shallow(<TitleForFilterSections {...props} />);

    it("Component renders title for filter section", () => {
        expect(wrapper.find(".section-title").length).toBe(1);
        expect(wrapper.find(".section-title").text()).toBe(props.title);
    });

    it("Component renders one icon", () => {
        expect(wrapper.find(".arow-button").length).toBe(1);
        expect(wrapper.find(".arow-button").prop("src")).toBe(props.arrowImg);
    });

    it("Component renders SelectedFilterList component if 'selectedContext' passed", () => {
        expect(wrapper.find(SelectedFilterList).length).toEqual(1);
    });
});
