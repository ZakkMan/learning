var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var winston = require('winston');
var nunjucks = require('nunjucks');

// Instagram Node
var ig = require('instagram-node').instagram();
ig.use({client_id: "5a2c39eec0914f3ab1ef8be2a9c04dea", client_secret: "11f8626963f84d2f9927561b7582971e"});

ig.media_popular(function( err, media, limit ) {
  if ( err ) { throw err; }
  console.log( media )
})

winston.add(winston.transports.File, {"filename": "error.log", "level": "error"})

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

nconf.file("config.json");

nconf.defaults({
  "http": {
    "port": "3000"
  }
})

winston.info('initialised nconf');
winston.info('http config: ', nconf.get('http'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
