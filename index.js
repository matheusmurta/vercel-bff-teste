const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Dados vindos do servidor Node.js!'
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
