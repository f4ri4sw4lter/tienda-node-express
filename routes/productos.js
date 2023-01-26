var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.query("SELECT * FROM productos", function (err, productos) {
        db.query("SELECT * FROM productos WHERE destacado = 1", function (err, destacados) {
            db.query("SELECT * FROM categorias", function(err, categorias){
                res.render('productos', { titulo: 'Lista de productos', productos: productos, destacados: destacados, categorias:categorias });
            })
        });
    });
});

module.exports = router;