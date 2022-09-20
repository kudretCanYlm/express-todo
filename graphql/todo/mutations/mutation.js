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

const DeleteTodo = {
    type: TodoType,
    args: {
        todoId: {
            type: GraphQLString
        }
    },
    resolve(root, { todoId }) {

        if (!todoId)
            throw new Error("todoId is null")

        const todo = TodoModel.findByIdAndDelete(todoId).exec();

        if (!todo)
            throw new Error("there isn't any todo");

        return todo;
    }
}

module.exports = {
    AddTodo,
    DeleteTodo
}