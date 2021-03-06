import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import WeatherNow from "../../components/WeatherNow";

describe("Test for component which renders content after search", () => {
    it("Component should render the content if the props.result isn't null", () => {
        const props = {
            result: {
                icon: "picture"
            },
            cityName: ""
        };

        const wrapper = mount(<WeatherNow {...props} />);

        expect(wrapper.find("ContentBlock").length).toBe(1);
    });

    it("Component should render null if doesn't have props.result", () => {
        const props = {
            cityName: ""
        };

        const wrapper = mount(<WeatherNow {...props} />);

        expect(wrapper.exists()).toBeTruthy();
    });

    it("Component should pass the props to the child", () => {
        const props = {
            result: {
                icon: "picture"
            },
            cityName: "city"
        };

        const wrapper = mount(<WeatherNow {...props} />);

        expect(wrapper.find("MainBlockWeather").props().listOfData).toEqual(props.result);
        expect(wrapper.find("MainBlockWeather").props().cityName).toEqual(props.cityName);
    });
});
