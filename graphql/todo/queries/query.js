var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var TodoModel = require("../../../utils/db/post-provider").Todos;
var TodoType = require("../type/type").TodoType;

const QueryType = new GraphQLObjectType({
    name: "Query",
    fields: function () {
        return {
            todos: {
                type: new GraphQLList(TodoType),
                resolve: function () {
                    const todos = TodoModel.find().exec()

                    if (!todos) {
                        throw new Error('Error')
                    }

                    else
                        return todos;
                }
            },
            todoById: {
                type: TodoType,
                args: {
                    todoId: {
                        name: "todoId",
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: function (root, { todoId }) {
                    const todo = TodoModel.findById(todoId).exec();

                    return todo;
                }
            }
        }
    }
});

module.exports = { QueryType };