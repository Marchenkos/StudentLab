const express = require("express");
const app = express();
 
app.use("/home",function (request, response) {
  response.redirect("about")
});
app.use("/about", function (request, response) {
    let id = request.query.id;
    let userName = request.query.name;
    response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
});
 
app.listen();