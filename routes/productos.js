var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET users listing. */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM productos", function(err, resultados){
        res.render('productos', { title: 'Lista de productos', productos: resultados });
    });
});

module.exports = router;