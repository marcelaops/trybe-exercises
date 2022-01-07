const connection = require('./connection');

// 1. Crie o end POST /user

// 1a. Formatando os campos dos documentos da coleção 'users'
const format = (document) => {
  const {
    _id,
    password,
    ...user
  } = document;

  const formatted = {
    id: _id,
    ...user,
  };

  return formatted;
};

// 1b. Validando
const isValid = ({ firstName, lastName, email, password }) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 5) return false;
  return true;
}

// 1c. Criando o novo usuário no banco de dados
const create = ({ firstName, lastName, email, password }) =>
  connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then(result => format({ id: result.insertedId, firstName, lastName, email  }));

// 2
const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
      .then((users) => users.map((format))
    )
}

module.exports = {
  isValid,
  create,
  getAll
}; 
