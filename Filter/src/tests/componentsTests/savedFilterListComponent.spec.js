import React from "react";
import { shallow } from "enzyme";
import SavedFilterList from "../../components/SavedFilterList";

const { describe, it, expect } = global;

describe("Component that contain saved filter states", () => {
    const props = {
        list: ["one", "two", "three"],
        selectItem: () => {}
    };
    const wrapper = shallow(<SavedFilterList {...props} />);

    it("Render select element with options", () => {
        expect(wrapper.find("select").length).toBe(1);
        expect(wrapper.find("select").find("option").length).toBe(props.list.length);
    });
});
