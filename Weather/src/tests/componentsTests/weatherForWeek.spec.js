import React from "react";
import "jest-styled-components";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import WeatherForWeek from "../../components/WeatherForWeek";
import { RESIZE_WINDOW } from "../../constants";

describe("Test for component which renders content after search", () => {
    const props = {
        result: [[{
            tempetature: "",
            feelsLike: "",
            humidity: "",
            pressure: "",
            wind: "",
            weather: "",
            icon: "picture"
        }],
        [{
            tempetature: "",
            feelsLike: "",
            humidity: "",
            pressure: "",
            wind: "",
            weather: "",
            icon: "picture"
        }]],
        cityName: "city"
    };
    it("Component should render the content if the props.result isn't null", () => {
        const wrapper = mount(<WeatherForWeek {...props} />);

        expect(wrapper.find("ContentBlock").length).toBe(1);
    });

    it("Component render the correct content", () => {
        const wrapper = mount(<WeatherForWeek {...props} />);

        expect(wrapper.find("Headers").length).toBe(1);
        expect(wrapper.find("ContentBlock").length).toBe(1);
    });

    it("Component render the correct content for mobile version", () => {
        act(() => RESIZE_WINDOW(500));

        const wrapper = mount(<WeatherForWeek {...props} />);

        expect(wrapper.find("ButtonContainer").length).toBe(1);
        expect(wrapper.find("ContentBlock").length).toBe(1);
    });

    it("Component should pass the props to the children", () => {
        act(() => RESIZE_WINDOW(1080));

        const wrapper = mount(<WeatherForWeek {...props} />);
        const expected = {
            listOfData: props.result[0],
            cityName: props.cityName
        };

        expect(wrapper.find("AdditionalBockWeather").props().listOfData).toEqual(expected.listOfData);
        expect(wrapper.find("MainBlockWeather").props().cityName).toEqual(expected.cityName);
        expect(wrapper.find("MainBlockWeather").props().listOfData).toEqual(expected.listOfData[0]);
    });

    it("Component should change the props when the button is clicked", () => {
        act(() => RESIZE_WINDOW(500));

        const wrapper = mount(<WeatherForWeek {...props} />);

        const expected = {
            first: props.result[0],
            second: props.result[1],
        };

        expect(wrapper.find("MainBlockWeather").props().listOfData).toEqual(expected.first[0]);
        wrapper.find("Button").forEach(child => {
            if (child.props().value === "next") {
                child.simulate("click");
            }
        });

        expect(wrapper.find("MainBlockWeather").props().listOfData).toEqual(expected.second[0]);
    });

    it("Component should render the children with the correct styles", () => {
        act(() => RESIZE_WINDOW(1080));

        const wrapper = mount(<WeatherForWeek {...props} />);

        expect(wrapper.find("Headers")).toHaveStyleRule("font-family", "Comic Helvetic");
        expect(wrapper.find("Headers")).toHaveStyleRule("width", "50%");
        expect(wrapper.find("HeaderItem")).toHaveStyleRule("color", "white");
        expect(wrapper.find("ContentBlock")).toHaveStyleRule("display", "flex");
        expect(wrapper.find("ContentBlock")).toHaveStyleRule("width", "65%");
    });
});
