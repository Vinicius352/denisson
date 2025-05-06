const express = require('express');
const cors = require('cors');
const app = express();
const pessoaRoutes = require('./routes/pessoaRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', pessoaRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
