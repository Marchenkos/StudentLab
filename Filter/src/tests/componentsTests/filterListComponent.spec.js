import React from "react";
import { shallow } from "enzyme";
import FilterList from "../../components/FilterList";

const { describe, it, expect } = global;

describe("Test for component which renders filter result", () => {
    it("Component renders filter section", () => {
        [{ filters: ["one", "two", "three"], expectedResult: 1 },
            { filters: ["one", "two"], expectedResult: 1 },
            { filters: [], expectedResult: 0 }
        ].forEach(({ filters, expectedResult }) => {
            const props = {
                currentElements: filters,
                changeResult: () => {},
                selectedFilters: () => {}
            };
            const wrapper = shallow(<FilterList {...props} />);

            expect(wrapper.find(".contexts-box__result").length).toEqual(expectedResult);
        });
    });
});
