var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Todos = require("../schemas/todo-schema");

var Users = new Schema({
    id: ObjectId,
    name: String,
    surname: String,
    age: Number,
    gender: String,
    todo: [Todos]
})

module.exports = Users;