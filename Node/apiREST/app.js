const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const jsonParser = bodyParser.json();

app.get("/api/users", (req, res) => {
    const content = fs.readFileSync("users.json", "utf8");
    const users = JSON.parse(content);

    res.send(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = req.params["id"];
    const content = fs.readFileSync("users.json", "utf8");
    const users = JSON.parse(content);

    const user = users.filter(user => user.id == id);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send();
    }
});

app.listen(8008);