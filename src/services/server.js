const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8001;
const fs = require('fs');

app.use(bodyParser.json());

app.post('/users', async (req, res) => {
    const { nome, email, senha } = req.body;
    const newUser = { nome, email, senha, };

      fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Erro ao ler o arquivo JSON.' });
          return;
        }
    
        let json = JSON.parse(data);
        json.data.push(newUser);

        fs.writeFile('db.json', JSON.stringify(json, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao escrever no arquivo JSON.' });
            return;
        }

        res.status(201).json({ message: 'Usuário registrado com sucesso.' });
        });
    });
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
