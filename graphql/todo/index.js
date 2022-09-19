var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var { QueryType } = require('./queries/query');
var Mutation = require('./mutations/mutation');

const TodoSchema = new GraphQLSchema({
    query: QueryType,
    mutation: new GraphQLObjectType({
        name:"Mutation",
        fields:Mutation
    })
})

module.exports = { TodoSchema };