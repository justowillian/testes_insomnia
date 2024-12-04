const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'vitoriakar'
});

const createVeiculo = (data, callback) => {
    const query = 'INSERT INTO veiculos (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) VALUES (?, ?, ?, ?, ?)';
    con.query(query, [data.marca_veiculo, data.modelo_veiculo, data.ano_veiculo, data.fabricacao_veiculo, data.cliente_id], callback);
};

const readVeiculos = (callback) => {
    const query = "SELECT * FROM veiculos";
    con.query(query, callback);
};

const updateVeiculo = (data, callback) => {
    const query = 'UPDATE veiculos SET marca_veiculo = ?, modelo_veiculo = ?, ano_veiculo = ?, fabricacao_veiculo = ?, cliente_id = ? WHERE veiculos_id = ?';
    con.query(query, [data.marca_veiculo, data.modelo_veiculo, data.ano_veiculo, data.fabricacao_veiculo, data.cliente_id, data.veiculos_id], callback);
};

const deleteVeiculo = (veiculos_id, callback) => {
    const query = 'DELETE FROM veiculos WHERE veiculos_id = ?';
    con.query(query, [veiculos_id], callback);
};

module.exports = { createVeiculo, readVeiculos, updateVeiculo, deleteVeiculo };
