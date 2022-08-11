var express = require("express");
var router = express.Router();

var users = [
    {
        id: "s68d434z364",
        name: "Jason",
        surname: "Test",
        age: 20,
        sex: "Male"
    },
    {
        id: "jlskf65a6asdf",
        name: "Emenike",
        surname: "Test",
        age: 40,
        sex: "Male"
    },
    {
        id: "şsmd65ad5s4",
        name: "Jessica",
        surname: "Test",
        age: 21,
        sex: "Famale"
    },
    {
        id: "lkjs65a563xcv",
        name: "Jesus",
        surname: "Test",
        age: 26,
        sex: "Male"
    },
]

const messages = [
    {
        nullMessage: "there are null params"
    }
]

router.get("/", function (req, res, next) {
    if (req.body.id == undefined)
        res.json(users);
    else
        res.json(users.filter(x => x.id == req.body.id));
})

router.post("/", function (req, res, next) {
    if (req.body.name == undefined || req.body.surname == undefined)
        req.json(messages);
    else {
        req.json("kaydetmeye hazır");
    }

})


module.exports = router;
