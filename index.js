const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Dados vindos do servidor Node.js!'
    };
    res.json(data);
});

app.get('/', (req, res) => {
    res.send('Olá, mundo! Este é o endpoint GET simples.');
  });

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
