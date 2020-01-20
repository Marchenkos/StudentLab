import React from "react";
import "jest-styled-components";
import { shallow, mount } from "enzyme";
import Search from "../../components/Search";

describe("Test for component which renders components to search", () => {
    const props = {
        getWeather: () => {}
    };

    it("Component should render the search block", () => {
        const wrapper = shallow(<Search {...props} />);

        expect(wrapper.find("SearchBlock").length).toEqual(1);
    });

    it("Component should render search block with correct content", () => {
        const wrapper = shallow(<Search {...props} />);

        const searchBlock = wrapper.find("SearchBlock");

        expect(searchBlock.find("Select").length).toBe(1);
        expect(searchBlock.find("SearchLine").length).toBe(1);
        expect(searchBlock.find("SearchButton").length).toBe(1);
    });

    it("Component should call method when button is clicked", () => {
        const mockFunction = jest.fn();
        const specialProps = {
            getWeather: mockFunction
        };
        const wrapper = mount(<Search {...specialProps} />);

        wrapper.find("input").instance().value = "London";
        wrapper.find("SearchButton").simulate("click");
        
        expect(mockFunction).toBeCalled();
    });

    it("Component should render a new child if's it prop is changed", () => {
        const expectedValue = "Minsk";

        const wrapper = mount(<Search {...props} />);

        wrapper.find("input").instance().value = expectedValue;

        expect(wrapper.find("input").instance().value).toEqual(expectedValue);
    });

    it("Change props.value if's some option is selected", () => {
        const expectedValue = {
            firstValue: "Now",
            secondValue: "5 days"
        };

        const wrapper = mount(<Search {...props} />);

        expect(wrapper.find("select").instance().value).toEqual(expectedValue.firstValue);

        wrapper.find("option").last().instance().selected = true;

        expect(wrapper.find("select").instance().value).toEqual(expectedValue.secondValue);
    });
});
