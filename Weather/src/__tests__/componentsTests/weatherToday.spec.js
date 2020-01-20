import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import WeatherToday from "../../components/WeatherToday";

describe("Test for component which renders content after search", () => {
    const props = {
        result: [
            {
                tempetature: "",
                feelsLike: "",
                humidity: "",
                pressure: "",
                wind: "",
                weather: "",
                icon: "picture"
            }
        ],
        cityName: "city"
    };

    const wrapper = mount(<WeatherToday {...props} />);

    it("Component should render the content if the props.result isn't null", () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.find("MainBlockWeather").length).toBe(1);
        expect(wrapper.find("AdditionalBockWeather").length).toBe(1);
    });

    it("Component should pass the props to the child", () => {
        expect(wrapper.find("MainBlockWeather").props().listOfData).toEqual(props.result[0]);
        expect(wrapper.find("MainBlockWeather").props().cityName).toEqual(props.cityName);
        expect(wrapper.find("AdditionalBockWeather").props().listOfData).toEqual(props.result);
    });
    
});
