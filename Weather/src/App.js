import React from "react";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";

export default class App extends React.Component {
    render() {
        return (
            <>
                <HeaderContainer />
                <ContentContainer />
            </>
        );
    }
}
