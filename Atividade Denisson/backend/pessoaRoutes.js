const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

router.get('/pessoas', pessoaController.listar);
router.post('/pessoas', pessoaController.criar);
router.put('/pessoas/:id', pessoaController.atualizar);
router.delete('/pessoas/:id', pessoaController.deletar);

module.exports = router;
