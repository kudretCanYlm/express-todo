var UserModel = require("../../../utils/db/post-provider").Users;
var TodoModel = require("../../../utils/db/post-provider").Todos;
var UserType = require("../type/type").UserType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLInt = require("graphql").GraphQLInt;

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

        if (!newUser) {
            throw new Error('Error');
        }
        return newUser
    }
}

const AddTodoToUser = {
    type: UserType,
    args: {
        userId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        todoId: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, { userId, todoId }) {

        TodoModel.findOne({ _id: todoId }, function (err, todo) {

            UserModel.findOneAndUpdate(
                {
                    _id: userId
                },
                {
                    $push:
                    {
                        todo: todo
                    }
                }).exec();


        });

        return UserModel.findById(userId).exec();

    }
}

const DeleteUser = {
    type: UserType,
    args: {
        userId: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, { userId }) {

        if (!userId)
            throw new Error("userId is null");

        const user = UserModel.findByIdAndDelete(userId).exec();

        if (!user)
            throw new Error("there isn't any user");

        return user;
    }
}

module.exports = { AddUser, AddTodoToUser, DeleteUser }