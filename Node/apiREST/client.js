//lcp --proxyUrl http://localhost:3000/api/users
const form = document.querySelector("form");

function getUsers() {
    fetch("http://localhost:3000/api/users").then(response => response.json())
    .then(data => {
        data.map(item => createRow(item));
    })
}

function addUser(body) {
    fetch("http://localhost:8010/proxy", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
    .then(value => {
        createRow(value);
    })
}

function editUser(body) {
    fetch("http://localhost:8010/proxy", {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
    .then(data => {
        clearTable();
        data.map(item => createRow(item));
    })
}

function removeUser(id) {
    fetch(`http://localhost:8010/proxy/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
    .then(data => {
        clearTable();
        data.map(item => createRow(item));
    })
}

function reset() {
    form.reset();
}

function clearTable() {
    const tableContent = document.querySelector(".table-content");
    tableContent.innerHTML = "";
}

function getValue() {
    const name = form.elements["userName"].value;
    const age = form.elements["userAge"].value;

    return {
        name,
        age
    };
}

function createRow(data) {
    const row = document.createElement("tr");
    const tableContent = document.querySelector(".table-content");

    const tdId = document.createElement("td");
    tdId.innerHTML = data.id;
    row.appendChild(tdId);

    const tdName = document.createElement("td");
    tdName.innerHTML = data.name;
    row.appendChild(tdName);

    const tdAge = document.createElement("td");
    tdAge.innerHTML = data.age;
    row.appendChild(tdAge);

    const tdEdit = document.createElement("td");
    tdEdit.className = 'editLink';
    tdEdit.setAttribute("data-id", data.id);
    tdEdit.innerHTML = "Edit";
    tdEdit.addEventListener("click", () => {
        let body = getValue();
        body.id = tdEdit.getAttribute("data-id");

        reset();
        editUser(body);
    });

    const tdDelete = document.createElement("td");
    tdDelete.innerHTML = "Remove";
    tdDelete.className = 'removeLink';
    tdDelete.setAttribute("data-id", data.id);
    tdDelete.addEventListener("click", () => {
        removeUser(tdDelete.getAttribute("data-id"));
    });

    row.appendChild(tdEdit);
    row.appendChild(tdDelete);

    tableContent.appendChild(row);
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const body = getValue();

    reset();
    addUser(body);
});

getUsers();