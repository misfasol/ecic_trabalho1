import '../App.css'

function Cadastro({ appendUser, users, setUsers }) {

    function cadastrar() {
        const nome = document.getElementById("input_nome").value;
        const email = document.getElementById("input_email").value;
        const cpf = document.getElementById("input_cpf").value;
        const genero = document.getElementById("input_genero").value;
        const endereco = document.getElementById("input_endereco").value;
        // console.log("req", nome, email);
        fetch("http://localhost:9000/users/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nome": nome,
                "email": email,
                "cpf": cpf,
                "genero": genero,
                "endereco": endereco
            })
        }).then(res => res.json())
        .then(res => {
            // console.log("res", res);
            let elem = document.getElementsByClassName("erro_input")[0];
            // console.log(elem);
            if (res.erro) {
                // console.log(`erro: ${res.erro}`)
                elem.innerText = res.erro;
            } else {
                appendUser(res);
                elem.innerText = "Sem erro";
            }
        });
    }

    function appendUser(novo) {
        setUsers([
            ...users,
            {
                id: novo.id,
                "nome": novo.nome,
                "email": novo.email,
                "cpf": novo.cpf,
                "genero": novo.genero,
                "endereco": novo.endereco
            }
        ]);
    }

    return <div className='cadastro_div'>
        <h1>Cadastro</h1>
        <div className='cadastro_input'>
            <input type="text" name="input_nome" id="input_nome" placeholder="Nome"/>
            <input type="text" name="input_email" id="input_email" placeholder="Email"/>
            <input type="text" name="input_cpf" id="input_cpf" placeholder="CPF"/>
            <input type="text" name="input_genero" id="input_genero" placeholder="Gênero"/>
            <input type="text" name="input_endereco" id="input_endereco" placeholder="Endereço"/>
        </div>
        <button type='button' onClick={cadastrar}>Cadastrar</button>
        <h3 className='erro_input'>Sem erro</h3>
    </div>
}

export default Cadastro