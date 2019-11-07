require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.use(express.json());

const port=process.env.PORT
server.listen(port, () => {
    console.log("it's alive");
})

server.get("/", (req, res) => {
    res.send("Haiiii")
})