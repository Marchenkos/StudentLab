import React from "react";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";
import { MainContainer, MainContent } from "./style/mainStyle";

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
