import React from "react";
import { shallow } from "enzyme";
import SavedFilterList from "../../components/SavedFilterList";

const { describe, it, expect } = global;

describe("Test for component that contains saved filter states", () => {
    it("Component renders of drop-down list items", () => {
        const props = {
            list: ["one", "two", "three"],
            selectItem: () => {}
        };
        const wrapper = shallow(<SavedFilterList {...props} />);

        expect(wrapper.find(".manage-block__listOfSavedFilters").length).toBe(1);
        expect(wrapper.find(".manage-block__listOfSavedFilters").find(".filters__item").length).toBe(props.list.length);
    });
});
