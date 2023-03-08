const express = require('express');
const router = express.Router();
const { BackofficeController } = require('./controller')

router.get('/', BackofficeController.dashboard)
      .get('/producto/:id', BackofficeController.showProducto)
      .get('/productos', BackofficeController.showProductos)
      .get('/productos/toggledestacado/:id', BackofficeController.toggleDestacado)
      //POST
      .post('/producto/:id/update', BackofficeController.updateProducto)

module.exports = router;