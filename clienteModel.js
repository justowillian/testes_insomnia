const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'vitoriakar'
});

const createCliente = (data, callback) => {
    const query = 'INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [data.nome, data.cpf, data.email, data.endereco, data.data_nascimento, data.data_cadastro], callback);
};

const readClientes = (callback) => {
    const query = "SELECT * FROM clientes";
    con.query(query, callback);
};

const updateCliente = (data, callback) => {
    const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    con.query(query, [data.nome, data.cpf, data.email, data.endereco, data.data_nascimento, data.data_cadastro, data.cliente_id], callback);
};

const deleteCliente = (cliente_id, callback) => {
    const query = 'DELETE FROM clientes WHERE cliente_id = ?';
    con.query(query, [cliente_id], callback);
};

module.exports = { createCliente, readClientes, updateCliente, deleteCliente};