import React from "react";
import { MainContainer } from "../style/mainStyle";
import { WeatherForWeek } from "./WeatherForWeek";
import { ContentContainer, BackgroundContainer, Information, Img, InformationBlock, TodayBlock, InformationBlockItem } from "../style/contentStyle";
import weather from "../../img/weatherImg/rainSun.png";

const now = "now";
const today = "today";
const fiveDays = "5 days";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.mode = "now";
        this.modeToShow = {
            [now]: this.renderSimpleResult(),
            [today]: this.renderSimpleResult(),
            [fiveDays]: <WeatherForWeek result={this.props.result} cityName={this.props.cityName} />
        };
    }

    renderSimpleResult = () => {
        return (
            <TodayBlock>
                <InformationBlock block="main">
                    <InformationBlockItem>
                        <Img block="main" src={weather} />
                        <Information bold> -0.65</Information>
                    </InformationBlockItem>
                    <InformationBlockItem>
                        <Information bold>London</Information>
                        <Information bold={false}>Inf</Information>
                        <Information bold={false}>Inf</Information>
                        <Information bold={false}>Inf</Information>
                    </InformationBlockItem>
                </InformationBlock>
                <InformationBlock block="additional">
                    <InformationBlockItem>
                        <Information bold={false}>Morning</Information>
                        <Img block="additional" src={weather} />
                        <Information bold={false}>Weather</Information>
                    </InformationBlockItem>
                    <InformationBlockItem>
                        <Information bold={false}>Morning</Information>
                        <Img block="additional" src={weather} />
                        <Information bold={false}>Weather</Information>
                    </InformationBlockItem>
                </InformationBlock>
            </TodayBlock>
        );
    };

    render() {
        return (
            <MainContainer>
                <ContentContainer>
                    <BackgroundContainer>
                        {
                            this.props.result ? <WeatherForWeek result={this.props.result} cityName={this.props.cityName} />
                                : null
                        }
                    </BackgroundContainer>
                </ContentContainer>
            </MainContainer>
        );
    }
}
