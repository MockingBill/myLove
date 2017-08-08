var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
require('./app/wb_unite/db_connection');

/*
文件上传
 */
var app=express();
var multer=require('multer');
app.use(multer({
    dest: './public/images',
    rename: function (fieldname, filename) {
        return filename;
    }
}));
/**
 * session配置
 */
app.use(session({
    name: 'skey',
    secret: 'monkeySec', // 用来对session id相关的cookie进行签名
    store: new FileStore(), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    resave: false, // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 60 * 1000 // 有效期，单位是毫秒
    }
}));
app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});
// view层模板引擎配置
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
global.__base = __dirname;


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use('/public',express.static(path.join(__dirname, 'public')));
/**
 * 路由路径拦截
 */
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/timeAxis',require('./app/timeAxis/routes/timeAxis'));
app.use('/login',require('./app/user/routes/user'));

/**
 * 权限管理
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
