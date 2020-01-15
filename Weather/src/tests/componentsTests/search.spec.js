import React from "react";
import { shallow, mount } from "enzyme";
import Search from "../../components/Search";

const { describe, it, expect } = global;

describe("Test for component which renders components to search", () => {
    it("Component should render search block with correct style", () => {
        const props = {
            getWeather: () => {}
        };
        const wrapper = shallow(<Search {...props} />);

        expect(wrapper.find("SearchBlock").length).toEqual(1);
    });

    it("Component should render search block with correct children", () => {
        const props = {
            getWeather: () => {}
        };
        const wrapper = shallow(<Search {...props} />);

        const searchBlock = wrapper.find("SearchBlock");

        expect(searchBlock.find("Select").length).toBe(1);
        expect(searchBlock.find("SearchLine").length).toBe(1);
        expect(searchBlock.find("SearchButton").length).toBe(1);
    });

    // it("Component should call method when button is clicked", () => {
    //     const mockFunction = jest.fn();
    //     const props = {
    //         getWeather: mockFunction
    //     };
    //     const wrapper = mount(<Search {...props} />);

    //     wrapper.find("input").instance().value = "London";
    //     wrapper.find("SearchButton").simulate("click");
        
    //     expect(mockFunction).toBeCalled();
    // });

    // it("Component should render a new child if's it prop is changed", () => {
    //     const props = {
    //         getWeather: () => {}
    //     };
    //     const expectedValue = "Minsk";

    //     const wrapper = mount(<Search {...props} />);

    //     wrapper.find("input").instance().value = expectedValue;

    //     expect(wrapper.find("input").instance().value).toEqual(expectedValue);
    // });
});
