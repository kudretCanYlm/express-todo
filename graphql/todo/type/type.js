var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;

const TodoType = new GraphQLObjectType({
    name: "todos",
    fields: function () {
        return {
            _id: {
                type: GraphQLID
            },
            text: {
                type: GraphQLString
            }
        }
    }
})

module.exports = { TodoType };