import React from "react";
import { ContentContainer, BackgroundContainer, Information, Img, InformationBlock, TodayBlock, InformationBlockItem } from "../style/contentStyle";
import weather from "../../img/weatherImg/rainSun.png";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.mode = "now";
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

    renderComplexResult = () => {
        return (
            <TodayBlock complex>
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
                <InformationBlock complex>
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
            <ContentContainer>
                <BackgroundContainer>
                    {this.renderComplexResult()}
                </BackgroundContainer>
            </ContentContainer>
        );
    }
}
