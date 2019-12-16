import React from "react";
import { shallow } from "enzyme";
import CheckboxList from "../../components/СheckboxList";

const { describe, it, expect } = global;
const filters = ["Three Days Grace", "Linkin Park", "AC/DC"];

describe("Component that checkbox for each filter", () => {
    it("Render list of filters", () => {
        const props = {
            filter: filters,
            selectedContext: [],
            eventListener: () => {}
        };
        const wrapper = shallow(<CheckboxList {...props} />);
        const { filter, eventListener } = props;

        expect(wrapper.find("input").length).toEqual(Object.keys(filter).length);
        expect(wrapper.find("input").first().prop("onChange")).toEqual(eventListener);
    });

    it("Render one child if filters is empty", () => {
        const props = {
            filter: [],
            selectedContext: [],
            eventListener: () => {}
        };
        const wrapper = shallow(<CheckboxList {...props} />);

        expect(wrapper.children().length).toEqual(1);
        expect(wrapper.find("div").text()).toEqual("Select filters above");
    });
});
