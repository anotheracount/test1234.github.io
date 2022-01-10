const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chess.html');
});

server.listen(80, '192.168.1.138', () => {
  console.log('listening on *:80');
});

const users = {};

io.on('connection', (socket) => {
       
  socket.on('num', (ypos) => {
    console.log('ypos: ' + ypos);
    io.emit('num', ypos);
   });

  socket.on('num2', (xpos) => {
   console.log('xpos: ' + xpos);
   io.emit('num2', xpos);
 });

 socket.on('num3', (ypos2) => {
   console.log('ypos2: ' + ypos2);
   io.emit('num3', ypos2);
  });

 socket.on('num4', (xpos2) => {
  console.log('xpos2: ' + xpos2);
  io.emit('num4', xpos2);
});

      
      
      });
