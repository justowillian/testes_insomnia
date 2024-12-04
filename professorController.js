const professorModel = require('../models/professorModel');

const createProfessor = (req, res) => {
    professorModel.createProfessor(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Professor criado com sucesso', result });
        }
    });
};

const readProfessores = (req, res) => {
    professorModel.readProfessores((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateProfessor = (req, res) => {
    professorModel.updateProfessor(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Professor atualizado com sucesso', result });
        }
    });
};

const deleteProfessor = (req, res) => {
    const { idProfessor } = req.params;
    professorModel.deleteProfessor(idProfessor, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Professor removido com sucesso', result });
        }
    });
};

module.exports = { createProfessor, readProfessores, updateProfessor, deleteProfessor };
