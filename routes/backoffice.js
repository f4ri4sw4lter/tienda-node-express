var express = require('express');
var router = express.Router();
var db = require('../db/db');

router.get('/', function(req, res, next){
    db.query("SELECT * FROM productos", function(err, resultados){
        res.render('backoffice/backoffice', { titulo: 'Backoffice', productos: resultados });
    });
})

router.get('/productos', function(req, res, next){
    db.query("SELECT * FROM productos", function(err, resultados){
        res.render('backoffice/productos', { titulo: 'Productos', productos: resultados });
    });
})

module.exports = router;