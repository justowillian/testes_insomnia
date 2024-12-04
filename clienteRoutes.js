const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.createCliente);
router.get('/clientes', clienteController.readClientes);
router.put('/clientes/:cliente_id', clienteController.updateCliente);
router.delete('/clientes/:cliente_id', clienteController.deleteCliente);

module.exports = router;
