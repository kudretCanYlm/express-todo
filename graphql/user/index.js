var { GraphQLSchema } = require('graphql');
var { GraphQLObjectType } = require('graphql');
var { QueryType } = require('./queries/query');
var Mutation = require('./mutations/mutation');

const UserSchema = new GraphQLSchema({
    query: QueryType,
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: Mutation
    })
})

module.exports = { UserSchema };