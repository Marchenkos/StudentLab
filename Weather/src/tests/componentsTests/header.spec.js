import React from "react";
import "jest-styled-components";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import * as sinon from "sinon";
import Header from "../../components/Header";
import { DELAY_BEFORE_SUBMIT } from "../../constants";

const { describe, it, expect } = global;
let clock;

beforeEach(() => {
    clock = sinon.useFakeTimers();
});

afterEach(() => {
    clock.restore();
});

const resizeWindow = x => {
    window.innerWidth = x;
    window.dispatchEvent(new Event("resize"));
};

describe("Test for component which renders header block", () => {
    const props = {
        onFetchWeatherRequestNow: () => {},
        onFetchWeatherRequestToday: () => {},
        onFetchWeatherRequestForWeek: () => {},
        onEnterCityName: () => {},
        onChangeMode: () => {},
        onClearResult: () => {}
    };

    it("Component should render header block with correct content", () => {
        const wrapper = shallow(<Header {...props} />);

        expect(wrapper.find("HeaderBlock")).toBeTruthy();
        expect(wrapper.find("LogoBlock")).toBeTruthy();
        expect(wrapper.find("Img")).toBeTruthy();
        expect(wrapper.find("LogoName")).toBeTruthy();
        expect(wrapper.find("Search")).toBeTruthy();
    });

    it("Component should call methods in accordance with props.mode", () => {
        const gethWeatherNow = jest.fn();
        const gethWeatherForWeek = jest.fn();

        const specialProps = {
            onFetchWeatherRequestNow: gethWeatherNow,
            onFetchWeatherRequestForWeek: gethWeatherForWeek,
            onFetchWeatherRequestToday: () => {},
            onEnterCityName: () => {},
            onChangeMode: () => {},
            onClearResult: () => {}
        };

        const wrapper = mount(<Header {...specialProps} />);

        const searchComponent = wrapper.find("Search");
        searchComponent.find("SearchButton").simulate("click");

        clock.tick(DELAY_BEFORE_SUBMIT);
        expect(gethWeatherNow).toBeCalled();

        searchComponent.find("option").last().instance().selected = true;
        searchComponent.find("SearchButton").simulate("click");

        clock.tick(DELAY_BEFORE_SUBMIT);
        expect(gethWeatherForWeek).toBeCalled();
    });

    it("Component should call the methods when the button is clicked", () => {
        const changeCityName = jest.fn();
        const changeMode = jest.fn();
        const clearResult = jest.fn();

        const specialProps = {
            onFetchWeatherRequestNow: () => {},
            onFetchWeatherRequestToday: () => {},
            onFetchWeatherRequestForWeek: () => {},
            onEnterCityName: changeCityName,
            onChangeMode: changeMode,
            onClearResult: clearResult
        };

        const wrapper = mount(<Header {...specialProps} />);

        const searchComponent = wrapper.find("Search");
        searchComponent.find("SearchButton").simulate("click");

        expect(changeCityName).toBeCalled();
        expect(changeMode).toBeCalled();
        expect(clearResult).toBeCalled();
    });

    it("Component should render the button only for mobile version", () => {
        const wrapper = mount(<Header {...props} />);

        act(() => resizeWindow(500));

        expect(wrapper.find("button")).toBeTruthy();

        act(() => resizeWindow(1080));

        expect(wrapper.find("button").length).toBe(0);
    });

    it("Hide search line when the button is clicked", () => {
        act(() => resizeWindow(500));

        const wrapper = mount(<Header {...props} />);

        expect(wrapper.find("Search").length).toBe(1);

        wrapper.find("button").simulate("click");

        expect(wrapper.find("Search").length).toBe(0);
    });

    it("Component should render the children with the correct style", () => {
        const wrapper = mount(<Header {...props} />);

        expect(wrapper.find("HeaderBlock")).toHaveStyleRule("padding", "20px 50px");
        expect(wrapper.find("HeaderBlock")).toHaveStyleRule("display", "flex");
        expect(wrapper.find("LogoBlock")).toHaveStyleRule("display", "flex");
        expect(wrapper.find("LogoBlock")).toHaveStyleRule("flex-grow", "1");
        expect(wrapper.find("LogoName")).toHaveStyleRule("font-family", "Hammer Fat");
        expect(wrapper.find("LogoName")).toHaveStyleRule("font-size", "40px");
    });
});
