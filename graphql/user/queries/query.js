var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLString = require('graphql').GraphQLString;
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
            },
            userById: {
                type: UserType,
                args: {
                    userId: {
                        name: "userId",
                        type: GraphQLString
                    }
                },
                resolve: function (root, { userId }) {
                    if (!userId)
                        throw new Error("userId is null");

                    const user = UserModel.findById(userId).exec();

                    if (!user)
                        throw new Error("there isn't any user");
                        
                    return user;

                }
            }
        }
    }
})

module.exports = { QueryType };