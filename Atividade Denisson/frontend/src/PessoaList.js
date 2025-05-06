import React from 'react';

function PessoaList({ pessoas, editarPessoa, deletarPessoa }) {
  return (
    <ul>
      {pessoas.map((pessoa) => (
        <li key={pessoa.id}>
          {pessoa.nome} - {pessoa.idade} - {pessoa.UF}
          <button onClick={() => editarPessoa(pessoa)}>Editar</button>
          <button onClick={() => deletarPessoa(pessoa.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default PessoaList;
