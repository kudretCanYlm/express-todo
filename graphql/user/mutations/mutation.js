const { TodoType } = require('../../todo/type/type');
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require("../../../utils/db/post-provier").Users;
var UserType = require("../type/type").UserType;
var GraphQLNonNull=require("graphql").GraphQLNonNull;
var GraphQLString=require("graphql").GraphQLString;
var GraphQLInt=require("graphql").GraphQLInt;

const AddUser = {
    type: UserType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        surname: {
            type: new GraphQLNonNull(GraphQLString)

        },
        age: {
            type: new GraphQLNonNull(GraphQLInt)

        },
        gender: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const userModel = new UserModel(params);
        const newUser = userModel.save();

        if (!newTask) {
            throw new Error('Error');
        }
        return newTask
    }
}

module.exports = { AddUser }