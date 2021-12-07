const express = require("express");

const auth = require("./middlewares/authorization");
const fetchApi = require("./middlewares/fetch");

const app = express();

app.use(express.json());

app.get('/btc/price', auth, fetchApi);

app.listen(3000, () => {
  console.log("Escutando a entrada 3000.");
});
