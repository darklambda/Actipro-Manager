'use strict';

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let extinguisherRouter = require('./routes/Extinguisher');
let eformRouter = require('./routes/EForm');
let commentRouter = require('./routes/Comment');
let adminLoginRouter = require('./routes/adminLogin');
let adminRegisterRouter = require('./routes/adminRegister');
let registerRouter = require('./routes/userRegister');
let loginRouter = require('./routes/login');
let sessionRouter = require('./routes/session');
let logoutRouter = require('./routes/logout');

let app = express();


let cors = require('cors');

app.use(cors({origin: ["http://localhost:8100"], credentials: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/comentario', commentRouter);
app.use('/users', usersRouter);
app.use('/extinguisher', extinguisherRouter);
app.use('/eform', eformRouter);
app.use('/adminlogin', adminLoginRouter);
app.use('/adminregister', adminRegisterRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/session', sessionRouter);
app.use('/logout', logoutRouter);


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
