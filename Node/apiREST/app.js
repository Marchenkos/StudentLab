const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const jsonParser = bodyParser.json();

app.get("/api/users", (req, res) => {
    const content = fs.readFileSync("users.json", "utf8");

    const users = JSON.parse(content);

    res.header('Access-Control-Allow-Origin', "*");
    res.send(users);
});

app.post("/api/users", jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const newUser = req.body;

    const content = fs.readFileSync("users.json", "utf8");
    const users = JSON.parse(content);

    newUser.id = users.length > 0
        ? Math.max.apply(Math, users.map(user => user.id)) + 1
        : 1;

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users));

    res.send(newUser);
});

app.delete("/api/users/:id", (req, res) => {
    const id = req.params["id"];

    const content = fs.readFileSync("users.json", "utf8");
    const users = JSON.parse(content);

    const userIndex = users.indexOf(users.find(user => user.id == id));
    users.splice(userIndex, 1);

    fs.writeFileSync("users.json", JSON.stringify(users));

    res.send(users);
});

app.put("/api/users", jsonParser,(req, res) => {
    if (!req.body) return res.sendStatus(400);

    const { name, age, id } = req.body;

    const content = fs.readFileSync("users.json", "utf8");
    const users = JSON.parse(content);

    const userIndex = users.indexOf(users.find(user => user.id == id));
    const newUserList = users.map((user, index) => {
        if ( index == userIndex) {
            user.age = age;
            user.name = name;
        }

        return user;
    });

    fs.writeFileSync("users.json", JSON.stringify(newUserList));

    res.send(newUserList);
});

app.listen(3000);