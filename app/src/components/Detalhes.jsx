function Detalhes({userSelecionado}) {
    return <>
        {userSelecionado.id === undefined && <div>
            <span>Sem usário selecionado</span>
        </div>}
        {userSelecionado.id !== undefined && <div className="detalhes">
            <h3>Usuário selecionado:</h3>
            <span>Id: {userSelecionado.id}</span>
            <span>Nome: {userSelecionado.nome}</span>
            <span>Email: {userSelecionado.email}</span>
            <span>CPF: {userSelecionado.cpf}</span>
            <span>Gênero: {userSelecionado.genero}</span>
            <span>Endereço: {userSelecionado.endereco}</span>
        </div>}
    </>
}

export default Detalhes;