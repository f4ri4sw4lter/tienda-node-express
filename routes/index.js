var express = require('express');
var router = express.Router();
const Db = require('../db/db');

router.get('/', function(req, res, next) {
  Db.query("SELECT * FROM productos WHERE destacado = 1", function (err, productos_destacados) {
    Db.query("SELECT * FROM items_carousel", function(err, items){
      res.render('index', { titulo: 'Pagina Principal', 
                            productos_destacados:productos_destacados,
                            items:items});
    })
  });
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { titulo: 'Nosotros' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { titulo: 'Contacto' });
});

module.exports = router;
