const path = require('path');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const { Middleware: { error404, errorHandler } } = require('./middleware/index')

// Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ProductosRouter = require('./components/productos/routes');
var backofficeRouter = require('./routes/backoffice');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', ProductosRouter);
app.use('/backoffice', backofficeRouter);

// Errores
app.use(error404);
app.use(errorHandler);

module.exports = app;
