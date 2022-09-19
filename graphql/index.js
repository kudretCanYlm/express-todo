const { mergeSchemas } = require('@graphql-tools/schema');
var { TodoSchema } = require("./todo/index");
var { UserSchema } = require('./user/index');

const schemas = [
    TodoSchema,
    UserSchema
]

const AllSchemas = mergeSchemas({ schemas: schemas })

module.exports = { AllSchemas };
