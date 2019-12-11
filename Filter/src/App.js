import React from "react";
import FilterContainer from "./containers/FilterContainer";
import ManageBlockContainer from "./containers/ManageBlockContainer";

export default class App extends React.Component {
    render() {
        return (
            <>
                <ManageBlockContainer />
                <FilterContainer />
            </>
        );
    }
}
