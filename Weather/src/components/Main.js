import React from "react";
import { MainContainer } from "../style/mainStyle";
import Content from "./Content";

export default class Main extends React.Component {
    render() {
        return (
            <MainContainer>
                <Content />
            </MainContainer>
        );
    }
}
