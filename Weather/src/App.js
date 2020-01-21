import React from "react";
import styled from "styled-components";
import { device } from "./style/device";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";

const MainContainer = styled.div`
    padding: 20px 100px;
    text-align: center;

    @media ${device.mobile} {
        padding: 0;
    }
`;

MainContainer.displayName = "MainContainer";

const MainContent = styled.div`
    text-align: center;
    margin: 0 auto;
    max-width: 1500px;
`;

MainContent.displayName = "MainContent";

export default class App extends React.Component {
    render() {
        return (
            <MainContainer>
                <MainContent>
                    <HeaderContainer />
                    <ContentContainer />
                </MainContent>
            </MainContainer>
        );
    }
}
