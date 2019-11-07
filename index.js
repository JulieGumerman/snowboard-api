require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./users/users-routes");
const snowboardRouter = require("./snowboarding/snowboard-routes");


const server = express();

const session = require("express-session");
const KnexSessionsStore = require("connect-session-knex")(session);
const knexConfig = require("./data/dbconfig");



const port = process.env.PORT;

server.use(express.json());
server.use(cors());

server.use("/api", userRouter);
server.use("/api/mountains", snowboardRouter);

server.listen(port, () => {
    console.log(`Live from ${port}`)
})

server.get("/", (req, res) => {
    res.send("Winter is coming. Get those snowboards waxed!!!")
})