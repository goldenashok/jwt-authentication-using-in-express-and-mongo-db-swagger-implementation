require("rootpath");
const express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const errorHandler = require("./helpers/errorHandler");
const dotEnv = require('dotenv');

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");

var app = express();
dotEnv.config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// middleware for swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(errorHandler);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT, (err) => {
    console.log(`server running http://localhost${process.env.PORT}`);
});
module.exports = app;