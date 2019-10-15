const express = require("express");

const userRouter = require("./users/users-routes")
const server = express();

const port = 1313;

server.use(express.json());

server.use("/api", userRouter)

server.listen(port, () => {
    console.log(`Live from ${port}`)
})

server.get("/", (req, res) => {
    res.send("Winter is coming. Get those snowboards waxed!!!")
})