const { Pessoa } = require('../models');

module.exports = {
  async listar(req, res) {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  },
  async criar(req, res) {
    const pessoa = await Pessoa.create(req.body);
    res.json(pessoa);
  },
  async atualizar(req, res) {
    const pessoa = await Pessoa.findByPk(req.params.id);
    if (pessoa) {
      await pessoa.update(req.body);
      res.json(pessoa);
    } else {
      res.status(404).send();
    }
  },
  async deletar(req, res) {
    const pessoa = await Pessoa.findByPk(req.params.id);
    if (pessoa) {
      await pessoa.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).send();
    }
  }
};
