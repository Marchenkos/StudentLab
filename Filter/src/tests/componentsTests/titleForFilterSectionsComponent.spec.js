import React from "react";
import { shallow } from "enzyme";
import SelectedFilterList from "../../components/SelectedFilterList";
import TitleForFilterSections from "../../components/TitleForFilterSections";

const { describe, it, expect } = global;

describe("Component that render title for sections", () => {
    const props = {
        selectedContext: [],
        arrowImg: "img.png",
        title: "title"
    };
    const wrapper = shallow(<TitleForFilterSections {...props} />);

    it("Render three children", () => {
        const { title, arrowImg, selectedContext } = props;

        expect(wrapper.find("img").length).toBe(1);
        expect(wrapper.find("img").prop("src")).toBe(arrowImg);
        expect(wrapper.find("span").text()).toBe(title);
        expect(wrapper.find(SelectedFilterList).prop("selectedFilter")).toEqual(selectedContext);
    });
});
