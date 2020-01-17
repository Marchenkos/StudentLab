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

    it("Component should render the children with the correct style", () => {
        const wrapper = mount(<Search {...props} />);

        expect(wrapper.find("SearchBlock")).toHaveStyleRule("display", "flex");
        expect(wrapper.find("SearchBlock")).toHaveStyleRule("align-items", "flex-end");
        expect(wrapper.find("Select")).toHaveStyleRule("height", "35px");
        expect(wrapper.find("Select")).toHaveStyleRule("font-size", "20px");
        expect(wrapper.find("Option")).toHaveStyleRule("font-family", "Comic Helvetic");
        expect(wrapper.find("Option")).toHaveStyleRule("font-size", "20px");
        expect(wrapper.find("Option")).toHaveStyleRule("color", "#0f054a");
        expect(wrapper.find("SearchLine")).toHaveStyleRule("border", "none");
        expect(wrapper.find("SearchLine")).toHaveStyleRule("border-radius", "2px");
        expect(wrapper.find("SearchButton")).toHaveStyleRule("max-width", "40px");
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
