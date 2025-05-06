import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PessoaForm({ carregarPessoas, pessoaSelecionada, setPessoaSelecionada }) {
  const [form, setForm] = useState({ nome: '', idade: '', UF: '' });

  useEffect(() => {
    if (pessoaSelecionada) {
      setForm(pessoaSelecionada);
    }
  }, [pessoaSelecionada]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pessoaSelecionada) {
      await axios.put(`http://localhost:3001/api/pessoas/${pessoaSelecionada.id}`, form);
    } else {
      await axios.post('http://localhost:3001/api/pessoas', form);
    }
    setForm({ nome: '', idade: '', UF: '' });
    setPessoaSelecionada(null);
    carregarPessoas();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required />
      <input name="idade" value={form.idade} onChange={handleChange} placeholder="Idade" required />
      <input name="UF" value={form.UF} onChange={handleChange} placeholder="UF" required />
      <button type="submit">{pessoaSelecionada ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  );
}

export default PessoaForm;
