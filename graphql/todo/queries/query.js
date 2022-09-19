var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
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
            }
        }
    }
});

module.exports = { QueryType };