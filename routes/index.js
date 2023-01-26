var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM productos WHERE destacado = 1", function (err, productos_destacados) {
    db.query("SELECT * FROM items_carousel", function(err, items){
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
