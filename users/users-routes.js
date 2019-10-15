const express = require("express");
const Users = require("./users-model");

const userRouter = express.Router();


userRouter.get("/", (req, res) => {
    res.send("let the wild rumpus begin!")
})


module.exports = userRouter;