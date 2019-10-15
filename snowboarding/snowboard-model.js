const db = require("../data/dbconfig.js");


const findMountains = () => {
    return db("mountains");
}

const addMountain = mountain => {
    return db("mountains").insert(mountain);
}

module.exports = {
    findMountains, 
    addMountain
}