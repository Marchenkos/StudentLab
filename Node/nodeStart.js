const http = require("http");
const fs = require("fs");
const url = require("url");
const queyString = require("querystring");
let counter = 0;

function writeNumbers(res) {

    for (let i = 0; i < 100; i++) {
        counter++;
        res.write(counter.toString() + "\n");
    }
}

http.createServer((req, res) => {
    let query = url.parse(req.url).query;
    let app = queyString.parse(query).file + ".txt";

    res.writeHead(200, {"content-type": "text/plain"});

    writeNumbers(res);

    setTimeout(() => {
        console.log("opening" + app);

        fs.readFile(app, "utf8", (err, data) => {
            if (err) {
                res.write("err");
            } else {
                res.write(data);
            }

            res.end();
        })
    }, 2000);
}).listen(8124);

console.log("Server running on 8124");