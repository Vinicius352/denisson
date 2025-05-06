import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PessoaForm from './components/PessoaForm';
import PessoaList from './components/PessoaList';

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [pessoaSelecionada, setPessoaSelecionada] = useState(null);

  const carregarPessoas = async () => {
    const resposta = await axios.get('http://localhost:3001/api/pessoas');
    setPessoas(resposta.data);
  };

  const editarPessoa = (pessoa) => {
    setPessoaSelecionada(pessoa);
  };

  const deletarPessoa = async (id) => {
    await axios.delete(`http://localhost:3001/api/pessoas/${id}`);
    carregarPessoas();
  };

  useEffect(() => {
    carregarPessoas();
  }, []);

  return (
    <div>
      <h1>Cadastro de Pessoas</h1>
      <PessoaForm
        carregarPessoas={carregarPessoas}
        pessoaSelecionada={pessoaSelecionada}
        setPessoaSelecionada={setPessoaSelecionada}
      />
      <PessoaList
        pessoas={pessoas}
        editarPessoa={editarPessoa}
        deletarPessoa={deletarPessoa}
      />
    </div>
  );
}

export default App;
