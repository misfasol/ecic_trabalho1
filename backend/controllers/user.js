import {db} from "../db.js";

export const getUsers = (_, res) => {
    const q = "select * from usuarios;";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json(data);
    });
};

export const createUser = (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const cpf = req.body.cpf;
    const genero = req.body.genero;
    const endereco = req.body.endereco;
    console.log(req.body);
    if (nome === "") {
        return res.status(200).json({
            "erro": "Nome vazio"
        });
    }
    if (email === "") {
        return res.status(200).json({
            "erro": "Email vazio"
        });
    }
    if (cpf.length !== 11) {
        return res.status(200).json({
            "erro": "CPF inválido"
        });
    }
    if (genero !== "m" && genero !== "f") {
        return res.status(200).json({
            "erro": "Gênero inválido"
        });
    }
    if (endereco == "") {
        return res.status(200).json({
            "erro": "Endereço vazio"
        });
    }
    const q = `insert into usuarios values (null, "${nome}", "${email}", "${cpf}", "${genero}", "${endereco}");`;
    console.log(`q: ${q}`);
    db.query(q, (err, data) => {
        if (err) {
            console.log(`erro: ${err}`);
            return res.json(err);
        }
        return res.status(200).json({
            "id": data.insertId,
            "nome": nome,
            "email": email,
            "cpf": cpf,
            "genero": genero,
            "endereco": endereco
        });
    });
}

export const deleteUser = (req, res) => {
    const id = req.body.id;
    const q = `delete from usuarios where id = ${id};`;
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).end();
    });
}

export const editUser = (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const email = req.body.email;
    const cpf = req.body.cpf;
    const genero = req.body.genero;
    const endereco = req.body.endereco;
    const q = `update usuarios set usuarios.nome = "${nome}", usuarios.email = "${email}", usuarios.cpf = "${cpf}", usuarios.genero = "${genero}", usuarios.endereco = "${endereco}" where usuarios.id = ${id};`;
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).end();
    })
}