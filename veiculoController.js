const veiculoModel = require('../models/veiculoModel');

const createVeiculo = (req, res) => {
    veiculoModel.createVeiculo(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Veículo criado com sucesso', result });
        }
    });
};

const readVeiculos = (req, res) => {
    veiculoModel.readVeiculos((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateVeiculo = (req, res) => {
    veiculoModel.updateVeiculo(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Veículo atualizado com sucesso', result });
        }
    });
};

const deleteVeiculo = (req, res) => {
    const { idVeiculo } = req.params;
    veiculoModel.deleteVeiculo(idVeiculo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Veículo removido com sucesso', result });
        }
    });
};

module.exports = { createVeiculo, readVeiculos, updateVeiculo, deleteVeiculo };
