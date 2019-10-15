const express = require("express");
const protected = require("../auth/protected");
const Snowboard = require("./snowboard-model");
const snowboardRouter = express.Router();

snowboardRouter.get("/", protected, (req, res) => {
    Snowboard.findMountains()
        .then(mountains => {
            res.status(200).json(mountains)
        })
        .catch(err => {
            res.status(500).json({ message: "Sorry: No boarding until November"})
        })
})

snowboardRouter.post("/", protected, (req, res) => {
    Snowboard.addMountain(req.body)
        .then(mountain => {
            res.status(200).json(req.body)
        })
        .catch(err => {
            res.status(500).json({ message: "We are all out riding right now and can't help"})
        })
})




module.exports = snowboardRouter;