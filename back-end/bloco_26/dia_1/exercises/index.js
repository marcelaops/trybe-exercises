const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const User = require('./models/User');

app.use(bodyParser.json());

// 1d. Tratar o post com o middleware createUser
app.post('/user', middlewares.createUser);

// 1f.
app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});