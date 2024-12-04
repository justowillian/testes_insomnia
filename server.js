const express = require('express');
const app = express();

const clienteRoutes = require('./routes/clienteRoutes');
const telefoneRoutes = require('./routes/telefoneRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');
const professorRoutes = require('./routes/professorRoutes');

app.use(express.json());

app.use('/', clienteRoutes);
app.use('/', telefoneRoutes);
app.use('/', veiculoRoutes);
app.use('/', professorRoutes);

app.get('/', (req, res) => {
    res.send('Bem-vindo à API do Sistema!');
});

const port = 3000;
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
