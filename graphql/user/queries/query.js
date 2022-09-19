var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require("../../../utils/db/post-provider").Users;
var UserType = require("../type/type").UserType;

const QueryType = new GraphQLObjectType({
    name: "Query",
    fields: function () {
        return {
            users: {
                type: new GraphQLList(UserType),
                resolve: function () {
                    const users = UserModel.find().exec();

                    if (!users) {
                        throw new Error('Error')
                    }

                    else
                        return users
                }
            }
        }
    }
})

module.exports = { QueryType };