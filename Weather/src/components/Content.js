import React from "react";
import { ContentContainer, BackgroundContainer } from "../style/contentStyle";

export default class Content extends React.Component {
    render() {
        return (
            <ContentContainer>
                <BackgroundContainer>
                    content
                </BackgroundContainer>
            </ContentContainer>
        );
    }
}
