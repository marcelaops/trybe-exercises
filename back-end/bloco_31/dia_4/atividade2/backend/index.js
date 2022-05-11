// const app = require('express')(); -> n precisa
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

const square = {
  x: 0,
  y: 0,
};

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.emit("Square state", () => {
    return square;
  });

  socket.on("squareClick", () => { // func squareClick vai vir do front
    // socket.emit
    // square.x = square.x + Math.random()*(10 - 0) + 0;

  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  })
});


app.get('/', (req, res) => {
  res.json(square);
});

require('')(io);