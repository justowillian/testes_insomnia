const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.post('/professores', professorController.createProfessor);
router.get('/professores', professorController.readProfessores);
router.put('/professores/:professor_id', professorController.updateProfessor);
router.delete('/professores/:professor_id', professorController.deleteProfessor);

module.exports = router;
