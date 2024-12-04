const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Rota para criar um novo veículo
router.post('/veiculos', veiculoController.createVeiculo);

// Rota para listar todos os veículos
router.get('/veiculos', veiculoController.readVeiculos);

// Rota para atualizar os dados de um veículo existente
router.put('/veiculos/:veiculo_id', veiculoController.updateVeiculo);

// Rota para deletar um veículo
router.delete('/veiculos/:veiculo_id', veiculoController.deleteVeiculo);

module.exports = router;
