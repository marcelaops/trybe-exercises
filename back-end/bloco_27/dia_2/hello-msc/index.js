// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const Author = require('./controllers/Author');
const Book = require('./controllers/BooksController');
const errorMiddleware = require('./middlewares/error');

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/books', Book.getAll);
app.get('/books/:id', Book.findById);
app.post('/books', Book.create);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});