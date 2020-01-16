import React from "react";
import "jest-styled-components";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import Content from "../../components/Content";
import { NOW, TODAY, FIVE_DAYS } from "../../constants";
import errorPageMobile from "../../../img/errorPageMobile.png";
import errorPage from "../../../img/errorPage2.png";

const { describe, it, expect } = global;

const resizeWindow = x => {
    window.innerWidth = x;
    window.dispatchEvent(new Event("resize"));
};

describe("Test for component which renders main content", () => {
    it("Component should render the correct content", () => {
        const props = {
            result: [],
            searchMode: "",
            cityName: "",
            error: null
        };
        const wrapper = shallow(<Content {...props} />);

        expect(wrapper.find("InformationContainer").length).toBe(1);
        expect(wrapper.find("BackgroundContainer").length).toBe(1);
    });

    it("Component should render the spinner is props.result is null", () => {
        const props = {
            result: null,
            searchMode: "",
            cityName: "",
            error: null
        };

        const wrapper = mount(<Content {...props} />);
        expect(wrapper.find("Spinner")).toBeTruthy();
    });

    it("Component should render the error message is props.error isn't null", () => {
        const props = {
            result: null,
            searchMode: "",
            cityName: "",
            error: "404"
        };

        const wrapper = mount(<Content {...props} />);
        expect(wrapper.find("ErroImg")).toBeTruthy();
    });

    it("Component should render the different error message for different versions", () => {
        const props = {
            result: null,
            searchMode: "",
            cityName: "",
            error: "404"
        };

        const expectedValue = {
            desktopversion: errorPage,
            mobileVersion: errorPageMobile
        };

        const wrapper = mount(<Content {...props} />);

        expect(wrapper.find("ErroImg").props().src).toEqual(expectedValue.desktopversion);

        act(() => resizeWindow(500));

        expect(wrapper.find("ErroImg").props().src).toEqual(expectedValue.mobileVersion);
    });

    it("Component should render the children with the correct style", () => {
        const props = {
            result: [],
            searchMode: "",
            cityName: "",
            error: null
        };
        const wrapper = mount(<Content {...props} />);

        expect(wrapper.find("InformationContainer")).toHaveStyleRule("padding", "20px");
        expect(wrapper.find("InformationContainer")).toHaveStyleRule("background", "linear-gradient(90deg,#0f054a 0px,#5d62a6 100%)");
        expect(wrapper.find("BackgroundContainer")).toHaveStyleRule("background-size", "100%");
        expect(wrapper.find("BackgroundContainer")).toHaveStyleRule("width", "95%");
        expect(wrapper.find("BackgroundContainer")).toHaveStyleRule("margin", "0 auto");
    });

    it("Component should render the different children for different modes", () => {
        [{ searchMode: NOW, child: "WeatherNow" },
            { searchMode: TODAY, child: "WeatherToday" },
            { searchMode: FIVE_DAYS, child: "WeatherForWeek" }
        ].forEach(({ searchMode, child }) => {
            const props = {
                result: [],
                searchMode,
                cityName: "",
                error: null
            };
            const wrapper = mount(<Content {...props} />);

            expect(wrapper.find(child)).toBeTruthy();
        });
    });
});
