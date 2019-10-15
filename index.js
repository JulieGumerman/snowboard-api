const express = require("express");

const userRouter = require("./users/users-routes");
const snowboardRouter = require("./snowboarding/snowboard-routes");

const server = express();

const session = require("express-session");
const KnexSessionsStore = require("connect-session-knex")(session);
const knexConfig = require("./data/dbconfig");

const sessionConfiguration = {
    name: "helloz",
    secret: "never tellin",
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 60 * 60,
        secure: false
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionsStore({
        knex: knexConfig,
        createtable: true, 
        clearInterval: 1000 * 60 * 30
    })
}

const port = 1313;

server.use(session(sessionConfiguration));
server.use(express.json());

server.use("/api", userRouter);
server.use("/api/mountains", snowboardRouter);

server.listen(port, () => {
    console.log(`Live from ${port}`)
})

server.get("/", (req, res) => {
    res.send("Winter is coming. Get those snowboards waxed!!!")
})