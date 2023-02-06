var express = require('express');
var router = express.Router();
const { ProductosController } = require('./controller');

router
    .get('/', ProductosController.getProductos)
    .get('/:categoria', ProductosController.getProductosCategoria);
    
module.exports = router;