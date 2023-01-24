var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Pagina Principal' });
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { titulo: 'Nosotros' });
});


module.exports = router;
