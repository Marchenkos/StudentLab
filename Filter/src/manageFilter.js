let list = [];
let selectElement = document.querySelector(".listOfSavedFilters");
let initialValue = {
    currentTables: [],
    currentCells: [],
    result: []
};

function createTable(data) {
    let table = document.createElement("table");

    table.classList.add("savedFilter");
    let listOfSavedFilters = document.querySelector(".savedFilterState");

    for (let value in data) {
        let tr = document.createElement("tr");
        let tdHeader = document.createElement("td");
        let tdValue = document.createElement("td");

        tdHeader.innerHTML = value;
        tdValue.innerHTML = data[value];

        tr.appendChild(tdHeader);
        tr.appendChild(tdValue);
        table.appendChild(tr);
    }

    listOfSavedFilters.appendChild(table);
}

function saveFilter() {
    const allFilters = document.querySelectorAll(".contexts-box");

    let filterResult = {
        currentTables: [],
        currentCells: [],
        result: []
    };

    // eslint-disable-next-line no-plusplus
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
            filterResult.currentTables = checkedFilters;

            break;
        }
        case 1: {
            filterResult.currentCells = checkedFilters;

            break;
        }
        case 2: {
            filterResult.result = checkedFilters;

            break;
        }
        default:
            break;
        }
    }

    createTable(filterResult);
    list.push(filterResult);
    let option = document.createElement("option");
    option.setAttribute("value", list.length);
    selectElement.appendChild(option);
}

function loadFilter() {
    initialValue = list[selectElement.value - 1];
    console.log(initialValue);
}

let saveButton = document.querySelector(".saveButton");
saveButton.addEventListener("click", saveFilter);

const loadButton = document.querySelector(".loadButton");
loadButton.addEventListener("click", loadFilter);
