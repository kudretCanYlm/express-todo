var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_todo", {
    useNewUrlParser: true,
}).then(() => {
    console.log("conected");
}).catch((err) => {
    console.log(err);
});

var Todos = require("../schemas/todo-schema");
var Users = require("../schemas/user-schema");

mongoose.model("Todos", Todos);
mongoose.model("Users", Users);

var Todos = mongoose.model("Todos");
var Users = mongoose.model("Users");

module.exports = {
    Todos,
    Users
}