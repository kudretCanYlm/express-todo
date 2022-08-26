var mongoose=require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Todos = new Schema({
    id: ObjectId,
    text: String
})

module.exports = Todos;