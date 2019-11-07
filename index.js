const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.use(express.json());

server.listen(8000, () => {
    console.log("it's alive");
})

server.get("/", (req, res) => {
    res.send("Haiiii")
})