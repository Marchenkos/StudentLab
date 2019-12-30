import React from "react";
import { MainContainer } from "../style/mainStyle";
import Header from "./Header";
import Content from "./Content";

export default class Main extends React.Component {
    render() {
        return (
            <MainContainer>
                <Header />
                <div className="main-container__content">
                    <Content />
                </div>
            </MainContainer>
        );
    }
}
