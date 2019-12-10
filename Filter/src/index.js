import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import App from "./App";

let initialState = {
    filterTables: { currentTables: [] },
    filterCells: { currentCells: [] },
    filterEements: { result: [] }
};

let store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
