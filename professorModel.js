const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'vitoriakar'
});

const createProfessor = (data, callback) => {
    const query = 'INSERT INTO professor (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [data.nome, data.cpf, data.email, data.endereco, data.data_nascimento, data.data_cadastro], callback);
};

const readProfessores = (callback) => {
    const query = "SELECT * FROM professor";
    con.query(query, callback);
};

const updateProfessor = (data, callback) => {
    const query = 'UPDATE professor SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE professor_id = ?';
    con.query(query, [data.nome, data.cpf, data.email, data.endereco, data.data_nascimento, data.data_cadastro, data.professor_id], callback);
};

const deleteProfessor = (professor_id, callback) => {
    const query = 'DELETE FROM professor WHERE professor_id = ?';
    con.query(query, [professor_id], callback);
};

module.exports = {createProfessor, readProfessores, updateProfessor, deleteProfessor };