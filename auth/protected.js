const protected = (req, res, next) => {

        console.log(req.session)
        if (req.session && req.session.user) {
            next();
        } else {
            res.status(401).json({ message: "We don't know you around here."})
        }
}

module.exports = protected;