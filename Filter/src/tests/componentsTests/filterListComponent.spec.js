import React from "react";
import { shallow } from "enzyme";
import FilterList from "../../components/FilterList";
import SearchSection from "../../components/SearchSection";

const { describe, it, expect } = global;

describe("Component that contain list of result filters", () => {
    it("Pass prop to child component", () => {
        const props = {
            currentElements: [],
            changeResult: () => {},
            selectedFilters: () => {}
        };
        const wrapper = shallow(<FilterList {...props} />);
        const SearchComponent = wrapper.find(SearchSection);

        expect(SearchComponent.prop("sortFilters")).toEqual(props.currentElements);
    });

    it("Render block with filters, if current elements isn't empty", () => {
        const props = {
            currentElements: ["one", "two", "three"],
            changeResult: () => {},
            selectedFilters: () => {}
        };
        const props2 = {
            currentElements: [],
            changeResult: () => {},
            selectedFilters: () => {}
        };
        const wrapper = shallow(<FilterList {...props} />);
        const wrapper2 = shallow(<FilterList {...props2} />);

        expect(wrapper.find(".contexts-box__result").length).toEqual(1);

        expect(wrapper2.find(".contexts-box__result").length).toEqual(0);
    });

    it("Render one child, if current elements is empty", () => {
        const props = {
            currentElements: [],
            changeResult: () => {},
            selectedFilters: () => {}
        };
        const wrapper = shallow(<FilterList {...props} />);

        expect(wrapper.find(".contexts-box__result").length).toEqual(0);
    });
});
