const http = require("http");
const fs = require('fs').promises;

const requestListener = function (req, res) {
    let p = req.url;
    if (p == undefined || p == "/")
        p = "/index.html";
    fs.readFile(__dirname + p)
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(404);
            res.end("404 lol");
            return;
        });
};

const server = http.createServer(requestListener);

var port = 8880;

server.listen(port, () => {
    console.log(`Server is running on *:${port}`);
    
});