function Modal({ userClicked, close }) {
  return <div className="modal">
    <div>
      <span>
        Informações de: {userClicked.nome}
      </span>
      <span>
        Id: {userClicked.id}
      </span>
      <span>
        Nome: {userClicked.nome}
      </span>
      <span>
        Email: {userClicked.email}
      </span>
      <span>
        CPF: {userClicked.cpf}
      </span>
      <span>
        Gênero: {userClicked.genero}
      </span>
      <span>
        Endereço: {userClicked.endereco}
      </span>
    </div>
    <button onClick={close}>Fechar Modal</button>
  </div>
}

export default Modal