const http = require("http");

function accept(req, res) {
    if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != "websocket") {
        res.end();
        
        return;
    }

    if (!req.headers.connection.match(/\bupgrade\b/i)) {
        res.end();

        return;
    }
}
http.createServer(accept).listen(8080);