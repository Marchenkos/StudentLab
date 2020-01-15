import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import WeatherForWeek from "../../components/WeatherForWeek";

const { describe, it, expect } = global;

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
        }, {
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
    const wrapper = mount(<WeatherForWeek {...props} />);

    it("Component should render the content if the props.result isn't null", () => {
        expect(wrapper.find("ContentBlock").length).toBe(1);
    });

    it("Component should render null if doesn't have props.result", () => {
        const otherProps = {
            cityName: ""
        };

        const otherWrapper = mount(<WeatherForWeek {...otherProps} />);

        expect(otherWrapper.exists()).toBeTruthy();
    });
});
