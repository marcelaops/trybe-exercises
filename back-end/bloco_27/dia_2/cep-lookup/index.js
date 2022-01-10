const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');

app.use(bodyParser.json());

// endpoint `GET /ping`
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

// endpoint GET /cep/:cep
app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
