var express = require("express");
var fs = require("fs");

var app = express();
const port = 8080;

app.get("/", function (req, res) {
  html = fs.readFileSync("index.html");
  res.writeHead(200);
  res.write(html);
  res.end();
});

app.get("/test", function (req, res) {
  res.send("the REST endpoint test run!");
});

app.listen(port, function () {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
