import React from "react";
import Main from "./components/Main";
import HeaderContainer from "./containers/HeaderContainer";

export default class App extends React.Component {
    render() {
        return (
            <>
                <HeaderContainer />
                <Main />
            </>
        );
    }
}
