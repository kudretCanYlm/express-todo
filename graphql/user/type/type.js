const { TodoType } = require("../../todo/type/type");
var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLInt = require("graphql").GraphQLInt;
var GraphQLList = require("graphql").GraphQLList;

const UserType=new GraphQLObjectType({
    name:"user",
    fields:function(){
        return{
            _id:{
                type:new GraphQLNonNull(GraphQLID)
            },
            name:{
                type:GraphQLString
            },
            surname:{
                type:GraphQLString
            },
            age:{
                type:GraphQLInt
            },
            gender:{
                type:GraphQLString
            },
            todo:{
                type:new GraphQLList(TodoType)
            }
        }
    }
})

module.exports={UserType}