const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

// const server = http.createServer((req, res))

const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "static", "php", "index.php"));
})

app.listen(process.env.PORT || 5000, () => console.log("Server running on port 5000"));