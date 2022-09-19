var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_todo", {
    useNewUrlParser: true,
}).then(() => {
    console.log("connected");
}).catch((err) => {
    console.error(err);
});

var TodosSchema = require("../schemas/todo-schema");
var UsersSchema = require("../schemas/user-schema");

var Todos = mongoose.model("Todos",TodosSchema);
var Users = mongoose.model("Users",UsersSchema);


module.exports = {
    Todos,
    Users
}