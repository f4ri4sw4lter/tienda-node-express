const express = require('express');
const router = express.Router();
const { BackofficeController } = require('./controller')

router.get('/', BackofficeController.dashboard)
      .get('/producto/:id', BackofficeController.panelProducto)
      .get('/productos', BackofficeController.panelProductos)
      .get('/productos/toggledestacado/:id', BackofficeController.toggleDestacado)

module.exports = router;