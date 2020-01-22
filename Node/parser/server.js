const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const parser = bodyParser.urlencoded({extended: false});

const regRouter = express.Router();

regRouter.get("/", parser, (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

regRouter.post("/", parser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

    res.send(`${req.body.userName} - ${req.body.userAge}`);
});

regRouter.get("/:name/:id", parser, (req, res) => {
    const name = req.params["name"];
    const id = req.params["id"];

    res.send(`Name: ${name} Id: ${id}`);
});

app.use("/reg", regRouter);

app.listen(8000);