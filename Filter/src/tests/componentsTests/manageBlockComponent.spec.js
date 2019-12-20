import React from "react";
import { shallow } from "enzyme";
import ManageBlock from "../../components/ManageBlock";
import SavedFilterList from "../../components/SavedFilterList";

const { describe, it, expect } = global;

describe("Test for component which contains controls for saving filter states", () => {
    const props = {
        currentTables: [],
        currentCells: [],
        result: [],
        loadSavedStatus: () => {}
    };
    const wrapper = shallow(<ManageBlock {...props} />);

    it("Component renders two buttons", () => {
        expect(wrapper.find("button").length).toBe(2);
        expect(wrapper.find(".manage-block__loadButton").text()).toBe("Load");
        expect(wrapper.find(".manage-block__saveButton").text()).toBe("Save");
    });

    it("Component renders SavedFilterList component after clicking on the button", () => {
        const saveButton = wrapper.find(".manage-block__saveButton");

        saveButton.simulate("click");
        expect(wrapper.find(SavedFilterList).length).toBe(1);
    });
});
