var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var TodoType = require("../type/type").TodoType;
var TodoModel = require("../../../utils/db/post-provider").Todos;

const AddTodo = {
    type: TodoType,
    args: {
        text: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        const todoModel = new TodoModel(params);
        const newTodo = todoModel.save();

        if (!newTodo) {
            throw new Error('Error');
        }
        return newTodo
    }
}

module.exports={
    AddTodo
}