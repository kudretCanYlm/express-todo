var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { NOT_FOUND_MESSAGE, NULL_MESSAGE, ENTER_ID_MESSAGE } = require("./common/messages");

//will remove
var { Todos } = require("../utils/db/post-provier")

var todos =
    [
        {
            id: uuidv4(),
            personId: uuidv4(),
            text: "do somethin for test"
        },
        {
            id: uuidv4(),
            personId: uuidv4(),
            text: "test for the ths"
        },
        {
            id: uuidv4(),
            personId: uuidv4(),
            text: "write book"
        },
        {
            id: uuidv4(),
            personId: uuidv4(),
            text: "sleep for the ...."
        },
        {
            id: uuidv4(),
            personId: uuidv4(),
            text: "play game"
        },
    ]

router.get("/gettodosbyid", function (req, res, next) {
    if (req.body.id == undefined)
        res.json(Todos.find());
    else {
        var todo = todos.filter(x => x.id == req.body.id);

        if (todo != null)
            res.json(todo);
        else
            res.json(NOT_FOUND_MESSAGE);
    }

})

router.get("/gettodosbypersonId", function (req, res, next) {

    if (req.body.personId == undefined)
        res.json(todos);
    else {
        var todo = todos.filter(x => x.personId == req.body.personId);

        if (todo != null)
            res.json(todo);
        else
            res.json(NOT_FOUND_MESSAGE);
    }
})

router.post("/addtodo", function (req, res, next) {
    if (req.body.personId == undefined | req.body.text == undefined)
        res.json(NULL_MESSAGE)
    else {
        var todo = req.body;
        todo.id = uuidv4();

        todos.push(todo);

        res.json(todo);
    }
})

router.delete("/deletetodo", function (req, res, next) {

    if (req.body.id == undefined)
        res.json(ENTER_ID_MESSAGE);
    else {
        let body_id = req.body.id;

        todos = todos.filter(x => x.id != body_id);

        res.json(todos);
    }
})


module.exports = router;  