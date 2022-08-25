var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { NULL_MESSAGE, ENTER_ID_MESSAGE } = require("./common/messages");

var users = [
    {
        id: uuidv4(),
        name: "Jason",
        surname: "Test",
        age: 20,
        sex: "Male"
    },
    {
        id: uuidv4(),
        name: "Emenike",
        surname: "Test",
        age: 40,
        sex: "Male"
    },
    {
        id: uuidv4(),
        name: "Jessica",
        surname: "Test",
        age: 21,
        sex: "Famale"
    },
    {
        id: uuidv4(),
        name: "Jesus",
        surname: "Test",
        age: 26,
        sex: "Male"
    },
]

router.get("/getpersons", function (req, res, next) {
    if (req.body.id == undefined)
        res.json(users);
    else
        res.json(users.filter(x => x.id == req.body.id));
})

router.post("/addperson", function (req, res, next) {
    if (req.body.name == undefined || req.body.surname == undefined)
        res.json(NULL_MESSAGE);
    else {
        var user = req.body;
        user.id = uuidv4();

        console.log(user);

        users.push(user);
        res.json(user);
    }

})

router.put("/updateperson", function (req, res, next) {

    if (req.body.id == undefined)
        res.json(ENTER_ID_MESSAGE)
    else {
        let body_id = req.body.id;

        let keys = Object.keys(req.body)

        keys.forEach(x => {
            users.find(x => x.id == body_id)[x] = req.body[x]
        })

        res.json(users.find(x => x.id == body_id));
    }

})

router.delete("/deleteperson", function (req, res, next) {
    if (req.body.id == undefined)
        res.json(ENTER_ID_MESSAGE);

    else {
        let body_id = req.body.id;
        users=users.filter(x=>x.id!=body_id);

        res.json(users);

    }
})


module.exports = router;
