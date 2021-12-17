const connection = require('./connection');
// const Author = require('./Author');
const { ObjectId } = require('mongodb');


// Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros. Com o MYSQL.

// const getAll = async () => {
//   const [books] = await connection.execute(
//     'SELECT id, title, author_id FROM model_example.books',
//   );

//   return books.map(({ id, title, author_id }) => ({
//     id,
//     title,
//     authorId: author_id,
//   }));
// }

// Refatore o método getAll de models/Book para utilizar o mongo como banco de dados.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());    
}

// Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.

// const getByAuthorId = async (authorId) => {
//   const query = 'SELECT * FROM model_example.books WHERE author_id=?';

//   const [books] = await connection.execute(query, [authorId]);

//   return books.map(({ id, title, author_id }) => ({
//     id,
//     title,
//     authorId: author_id,
//   }));
 
// } 

// Refatore o método getAll de models/Book para utilizar o mongo como banco de dados.

const getByAuthorId = async (authorId) => {
  connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());
} 


// Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .
// MySQL
// const getById = async (id) => {
//   const query = 'SELECT * FROM model_example.books WHERE id = ?'
//   const [ book ] = await connection.execute(query, [id]);
  
//   if (book.length === 0) return null;
  
//   return book.map(({ id, title, author_id }) => ({
//     id,
//     title,
//     authorId: author_id,
//   }));
// }

// Mongo - Refatore o método getById de models/Book para utilizar o mongo como banco de dados.
const getById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!book) return null;

  return book;
}

// Na tabela books crie uma rota books do tipo POST . Faça as seguintes validações: Título não pode ser vazio; Título precisa ter pelo menos três caracteres; O campo author_id não pode ser vazio; O campo author_id só é válido se existir um autor com esse id;

// Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 .

// const bookIsValid = () => {
//   if (!title || typeof title !== 'string' || title.length < 3) return false;
//   if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

//   return true;
// }

// const bookCreate = () => connection.execute(
//   'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
//   [title, authorId],
// );

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  // bookIsValid,
  // bookCreate,
};
