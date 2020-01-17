import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import AdditionalBockWeather from "../../components/AdditionalBockWeather";

describe("Test for component which renders the list of the elements", () => {
    it("Component should render list of items based on props", () => {
        [{ listOfData: [{ icon: "1111" }, { icon: "1111" }], expectedResult: 2 },
            { listOfData: [{ icon: "1111" }], expectedResult: 1 },
            { listOfData: [], expectedResult: 0 }
        ].forEach(({ listOfData, expectedResult }) => {
            const props = {
                listOfData,
                changeDetailInformation: () => {}
            };
            const wrapper = mount(<AdditionalBockWeather {...props} />);

            expect(wrapper.find("InformationBlockItem").length).toEqual(expectedResult);
        });
    });

    it("Component should render list of the items with the child components", () => {
        const props = {
            listOfData: [{ icon: "picture" }],
            changeDetailInformation: () => {}
        };
        const wrapper = mount(<AdditionalBockWeather {...props} />);

        wrapper.find("InformationBlockItem").forEach(child => {
            expect(child.find("Information").length).toEqual(2);
            expect(child.find("Img").length).toEqual(1);
        });
    });

    it("Component should call the method when the block is clicked", () => {
        const mockFunction = jest.fn();
        const props = {
            listOfData: [{ icon: "picture" }],
            changeDetailInformation: mockFunction
        };

        const wrapper = mount(<AdditionalBockWeather {...props} />);

        wrapper.find("InformationBlockItem").simulate("click");
        expect(mockFunction).toBeCalled();
    });

    it("Component should render the children with the correct styles", () => {
        const props = {
            listOfData: [{ icon: "picture" }],
            changeDetailInformation: () => {}
        };

        const wrapper = mount(<AdditionalBockWeather {...props} />);

        expect(wrapper.find("InformationBlock")).toHaveStyleRule("display", "flex");
        expect(wrapper.find("InformationBlock")).toHaveStyleRule("align-items", "center");
        expect(wrapper.find("Img")).toHaveStyleRule("max-width", "50px");
        expect(wrapper.find("Information")).toHaveStyleRule("font-size", "20px");
        expect(wrapper.find("Information")).toHaveStyleRule("margin", "10px");
    });

    it("Component render only one child when the prop.listOfData is null", () => {
        const props = {
            listOfData: null,
            changeDetailInformation: () => {}
        };

        const wrapper = mount(<AdditionalBockWeather {...props} />);

        expect(wrapper.find("InformationBlock").children.length).toBe(1);
    });
});
