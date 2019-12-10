import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import App from "./App";

let selectElement = document.querySelector(".listOfSavedFilters");
let list = [{
    filterTables: { currentTables: [] },
    filterCells: { currentCells: [] },
    filterEements: { result: [] }
}];

function loadNewFilterState() {
    let currentValue = list[selectElement.value - 1];
    let store = createStore(rootReducer, currentValue);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}

function createTable(data) {
    let table = document.createElement("table");
    table.classList.add("savedFilter");
    let listOfSavedFilters = document.querySelector(".savedFilterState");

    for (let value in data) {
        for (let element in data[value]) {
            let tr = document.createElement("tr");
            let tdHeader = document.createElement("td");
            let tdValue = document.createElement("td");

            tdHeader.innerHTML = element;
            tdValue.innerHTML = data[value][element];

            tr.appendChild(tdHeader);
            tr.appendChild(tdValue);
            table.appendChild(tr);
        }
    }

    listOfSavedFilters.appendChild(table);
}

function saveFilter() {
    const allFilters = document.querySelectorAll(".contexts-box");

    let filterResult = {
        filterTables: {},
        filterCells: {},
        filterEements: {}
    };

    for (let i = 0; i < allFilters.length; i++) {
        const filterSection = allFilters[i].getElementsByTagName("input");
        let checkedFilters = [];

        [].forEach.call(filterSection, childElement => {
            if (childElement.checked && !checkedFilters.includes(childElement.value)) {
                checkedFilters.push(childElement.value);
            }
        });

        switch (i) {
        case 0: {
            filterResult.filterTables = { currentTables: checkedFilters };

            break;
        }
        case 1: {
            filterResult.filterCells = { currentCells: checkedFilters };

            break;
        }
        case 2: {
            filterResult.filterEements = { result: checkedFilters };

            break;
        }
        default:
            break;
        }
    }

    createTable(filterResult);
    list.push(filterResult);

    let option = document.createElement("option");
    option.innerHTML = `State ${list.length}`;
    option.setAttribute("value", list.length);
    selectElement.appendChild(option);
}

let saveButton = document.querySelector(".saveButton");
saveButton.addEventListener("click", saveFilter);

const loadButton = document.querySelector(".loadButton");
loadButton.addEventListener("click", loadNewFilterState);
