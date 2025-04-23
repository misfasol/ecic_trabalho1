import { useEffect, useState } from "react"

function Listagem({users}) {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [usersAtual, setUsersAtual] = useState([]);
    useEffect(() => {
        let contador = 0;
        const filtrados = users.filter(() => {
            contador++;
            return Math.ceil(contador / 10) === paginaAtual;
        })
        setUsersAtual(filtrados);
    }, [paginaAtual, users]);

    function diminuirPagina() {
        if (!(paginaAtual <= 1)) {
            setPaginaAtual(paginaAtual - 1);
        }
    }

    function aumentarPagina() {
        if (paginaAtual < Math.ceil(users.length / 10)) {
            setPaginaAtual(paginaAtual + 1);
        }
    }

    return <div className="listagem">
        <div className="listagem_info">
            <span>Página atual</span>
            <button type="button" onClick={diminuirPagina}>-</button>
            <span>{paginaAtual} / {Math.ceil(users.length / 10)}</span>
            <button type="button" onClick={aumentarPagina}>+</button>
        </div>
        <ul>
            {usersAtual.map(user => {
                return (<li className="listagem_item" key={user.id}>
                    <span>Id: {user.id}</span>
                    <span>Nome: {user.nome}</span>
                </li>
            )})}
        </ul>
    </div>
}

export default Listagem