import React from "react";
import styled from "styled-components";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";

const MainContainer = styled.div`
    background: linear-gradient(90deg, #0d014b 0px, #6c6ab5 100%);
    padding: 20px 100px;
    text-align: center;
`;

const MainContent = styled.div`
    text-align: center;
    margin: 0 auto;
    max-width: 1500px;
`;

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
