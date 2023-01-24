var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    productos_destacados = db.query("SELECT * FROM productos WHERE destacado = 1");
    productos = db.query("SELECT * FROM productos");
    
    res.render('productos', { titulo: 'Lista de productos', productos: productos, productos_destacados:productos_destacados });

});

module.exports = router;