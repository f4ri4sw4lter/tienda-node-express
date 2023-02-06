const express = require('express');
const router = express.Router();
const { BackofficeController } = require('./controller')

router.get('/', BackofficeController.dashboard)
      .get('/productos', BackofficeController.panelProductos)

module.exports = router;