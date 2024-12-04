const express = require('express');
const router = express.Router();
const telefoneController = require('../controllers/telefoneController');

router.post('/telefones', telefoneController.createTelefone);
router.get('/telefones', telefoneController.readTelefones);
router.put('/telefones/:telefone_id', telefoneController.updateTelefone);
router.delete('/telefones/:telefone_id', telefoneController.deleteTelefone);

module.exports = router;
