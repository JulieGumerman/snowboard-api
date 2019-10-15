const express = require("express");
const bcrypt = require("bcryptjs")
const Users = require("./users-model");

const userRouter = express.Router();


userRouter.get("/", (req, res) => {
    res.send("let the wild rumpus begin!")
})

userRouter.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.add(user)
        .then(users => res.status(200).json(user))
})

userRouter.post("/login", (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username})
        .first()
        .then(user => {
            res.status(200).json({ message: "Hey there!!!"})
        })
        .catch({ message: "We don't recognize your secret handshake."})
})

module.exports = userRouter;