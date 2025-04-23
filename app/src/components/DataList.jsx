import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import '../App.css'

function DataList({ setUserSelecionado, users, setUsers }) {
  
  const [userIdEditando, setUserIdEditando] = useState(-1);

  const navigate = useNavigate();

  function deleteUser(user) {
    fetch("http://localhost:9000/users/delete", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(r => {
      if (r.ok) {
        setUsers(users.filter(u => u.id !== user.id));
      }
    });
  }

  function editUser() {
    const nome  = document.getElementById("input_edit_nome").value;
    const email = document.getElementById("input_edit_email").value;
    const cpf = document.getElementById("input_edit_cpf").value;
    const genero = document.getElementById("input_edit_genero").value;
    const endereco = document.getElementById("input_edit_endereco").value;
    fetch("http://localhost:9000/users/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "id": userIdEditando,
        "nome": nome,
        "email": email,
        "cpf": cpf,
        "genero": genero,
        "endereco": endereco
      })
    }).then(r => {
      if (r.ok) {
        setUsers(users.map(user =>
          user.id === userIdEditando
            ? {
              "id": user.id,
              "nome": nome,
              "email": email,
              "cpf": cpf,
              "genero": genero,
              "endereco": endereco
            }
            : user))
        setUserIdEditando(-1);
      }
    })
  }

  function setUserRed(user) {
    setUserSelecionado(user);
    console.log("redi");
    navigate("/detalhes");
  }

  return (
    <div>
      <h1>Usuários</h1>
      <ul className='lista'>
        {users.map(user => (
          <li className='item_lista' key={user.id}>
            {user.id !== userIdEditando && (
              <>
                <span>Id: {user.id}</span>
                <span>Nome: {user.nome}</span>
                {/* <span>Email: {user.email}</span>
                <span>CPF: {user.cpf}</span>
                <span>Gênero: {user.genero}</span>
                <span>Endereço: {user.endereco}</span> */}
                <div type="button" className='botoes_user'>
                  <button onClick={() => {
                    setUserRed(user);
                  }}>Ver Mais</button>

                  <button type='button' onClick={() => {
                    deleteUser(user);
                  }}>Deletar</button>

                  <button type='button' onClick={() => {
                    setUserIdEditando(user.id);
                  }}>Editar</button>
                </div>
              </>
            )}
            {user.id === userIdEditando && (
              <>
                <span>Id: {user.id} </span>
                <span>Nome:  <input id='input_edit_nome'  type='text' placeholder={user.nome} defaultValue={user.nome} /> </span>
                <span>Email: <input id='input_edit_email' type='text' placeholder={user.email} defaultValue={user.email}/> </span>
                <span>CPF: <input id='input_edit_cpf' type='text' placeholder={user.cpf} defaultValue={user.cpf}/> </span>
                <span>Gênero: <input id='input_edit_genero' type='text' placeholder={user.genero} defaultValue={user.genero}/> </span>
                <span>Endereço: <input id='input_edit_endereco' type='text' placeholder={user.endereco} defaultValue={user.endereco}/> </span>
                <div type="button" className='botoes_user'>
                  <button type='button' onClick={() => {
                    setUserIdEditando(-1);
                  }}>Cancelar</button>

                  <button type='button' onClick={() => {
                    editUser();
                  }}>Salvar</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataList
