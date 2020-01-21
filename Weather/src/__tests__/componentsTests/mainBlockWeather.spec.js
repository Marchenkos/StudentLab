import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import MainBlockWeather from "../../components/MainBlockWeather";

describe("Test for component which renders the main information block", () => {
    const props = {
        listOfData: {
            icon: "picture"
        },
        cityName: "",
        currentDay: "monday"
    };
    const wrapper = mount(<MainBlockWeather {...props} />);

    it("Component should render two information blocks", () => {
        expect(wrapper.find("InformationBlockItem").length).toEqual(2);
    });

    it("Component should render information blocks with correct children", () => {
        wrapper.find("InformationBlockItem").forEach(child => {
            expect(child.find("Information").length).toBe(4);
        });

        const firstBlock = wrapper.find("InformationBlockItem").first();

        expect(firstBlock.find("Img").length).toBe(1);
    });

    it("Component render seven Information blocks if props.currentDay is null", () => {
        const specialProps = {
            listOfData: {
                icon: "picture"
            },
            cityName: "",
            currentDay: null
        };
        const specialWrapper = mount(<MainBlockWeather {...specialProps} />);

        expect(specialWrapper.find("Information").length).toEqual(7);
    });

    it("Component render eighth Information blocks if props.currentDay isn't null", () => {
        expect(wrapper.find("Information").length).toEqual(8);
    });
});
