var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require("body-parser")
var graphqlHTTP=require('express-graphql').graphqlHTTP;
var cors=require('cors');

//routes
var personRouter=require('./routes/person');
var todoRouter=require("./routes/todo");
const { AllSchemas } = require('./graphql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//cors
app.use("*",cors());

//graphql
var schemas=AllSchemas;

app.use("/graphql",cors(),graphqlHTTP({
  schema: schemas,
  rootValue:global,
  graphiql: true
}))

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//use routes
app.use('/persons',personRouter);
app.use("/todos",todoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
