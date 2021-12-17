const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

// Crie uma rota /books para trazer a lista de todos os livros. (alterado pelo exercício 3)
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
    ? await Book.getByAuthorId()
    : await Book.getAll();

  res.status(200).json(books);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

// Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .

app.get('/books/:id', async (req,res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Not found' }); 

  res.status(200).json(book);
});

//Criando um novo escritor
app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// Criando um novo livro
// retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 .
app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.bookIsValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos'});
  }

  await Book.bookCreate(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
