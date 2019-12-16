import React from "react";
import { shallow } from "enzyme";
import ManageBlock from "../../components/ManageBlock";
import SavedFilterList from "../../components/SavedFilterList";

const { describe, it, expect } = global;

describe("Component that contain management to save filter states", () => {
    const props = {
        currentTables: [],
        currentCells: [],
        result: [],
        loadSavedStatus: () => {}
    };
    const wrapper = shallow(<ManageBlock {...props} />);

    it("Render two buttons", () => {
        expect(wrapper.find("button").length).toBe(2);
        expect(wrapper.find(".manage-block__loadButton").text()).toBe("Load");
        expect(wrapper.find(".manage-block__saveButton").text()).toBe("Save");
    });

    it("Render SavedFilterList component after click on the second button", () => {
        const saveButton = wrapper.find(".manage-block__saveButton");

        saveButton.simulate("click");
        expect(wrapper.find(SavedFilterList).length).toBe(1);
    });
});
