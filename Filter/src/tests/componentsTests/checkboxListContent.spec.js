import React from "react";
import { shallow } from "enzyme";
import CheckboxList from "../../components/СheckboxList";

const { describe, it, expect } = global;
const filters = ["Three Days Grace", "Linkin Park", "AC/DC"];

describe("Test for component which renders checkboxes for each filter", () => {
    it("Component renders checkboxes if property 'filter' isn't empty", () => {
        const props = {
            filter: filters,
            selectedContext: [],
            eventListener: () => {}
        };
        const wrapper = shallow(<CheckboxList {...props} />);

        expect(wrapper.find("input").length).toEqual(Object.keys(props.filter).length);
        wrapper.find("input").forEach(child => {
            expect(child.prop("type")).toEqual("checkbox");
        });
    });

    it("Component renders one child element if property 'filter' is empty", () => {
        const props = {
            filter: [],
            selectedContext: [],
            eventListener: () => {}
        };
        const wrapper = shallow(<CheckboxList {...props} />);

        expect(wrapper.children().length).toEqual(1);
        expect(wrapper.find(".emptyBlock").text()).toEqual("Select filters above");
    });

    it("Call the method after filter selection", () => {
        const selectFilter = jest.fn();
        const props = {
            filter: ["Three Days Grace"],
            selectedContext: [],
            eventListener: selectFilter
        };

        const component = shallow(<CheckboxList {...props} />);
        const button = component.find(".checkboxField__item");

        button.simulate("change");
        expect(selectFilter).toBeCalled();
    });
});
