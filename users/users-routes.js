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
    let { name, password } = req.body;
    Users.findBy({ name })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.user = user.name;
                res.status(200).json({ message: "Hey there!!!"})
            } else {
                res.status(401).json({ message: "We don't recognize your secret handshake."})
            }

        })
        .catch(err => {
            res.status(500).json({ message: "Sorry. It's a rough day for all of us."})
        })
})

module.exports = userRouter;