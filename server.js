const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com MySQL
const db = mysql.createConnection({
    host: '172.31.46.230',
    user: 'user1', // Alterar se necessário
    password: 'password1', // Alterar se necessário
    database: 'crud_aws'
});

// Verifica a conexão
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Rotas da API
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao inserir dados.');
            return;
        }
        res.send('Usuário adicionado com sucesso!');
    });
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao deletar usuário.');
            return;
        }
        res.send('Usuário deletado com sucesso!');
    });
});

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://44.211.129.227:${PORT}`);
});
