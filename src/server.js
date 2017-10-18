const http = require('http');
const fs = require('fs');
const socketio = require('socket.io');

const circleobjs = {};

let player1id;

let playersinRoom = 0;
let Roomnumber = 0;


const colorsSetup = {};

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const handler = (request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    fs.readFile(`${__dirname}/../hosted/client.html`, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (request.url === '/bundle.js') {
    fs.readFile(`${__dirname}/../hosted/bundle.js`, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { 'Content-Type': 'application/javascript' });
      response.end(data);
    });
  } else if (request.url === '/helper.js') {
    fs.readFile(`${__dirname}/../hosted/helper.js`, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { 'Content-Type': 'application/javascript' });
      response.end(data);
    });
  } else if (request.url === '/style.css') {
    fs.readFile(`${__dirname}/../hosted/style.css`, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.end(data);
    });
  }
};

const app = http.createServer(handler);

app.listen(port);

const io = socketio(app);


io.on('connection', (socket) => {
  let R;
  let G;
  let B;
  const newroom = [];
  if (playersinRoom === 0) {
    for (let y = 0; y < 8; y++) {
      newroom[y] = [];
    }
    for (let x = 0; x < 8; x++) {
      for (let k = 0; k < 8; k++) {
        newroom[x][k] = null;
      }
    }
    circleobjs[Roomnumber] = newroom;
    circleobjs[Roomnumber].numOfpeople = 1;

    R = 0;
    G = 0;
    B = 0;
  } else {
    R = 255;
    G = 255;
    B = 255;
    circleobjs[Roomnumber].numOfpeople = 2;
  }
  playersinRoom += 1;

  socket.join(`room ${Roomnumber}`);

  socket.emit('Joined', { R, G, B, circleobjs: circleobjs[Roomnumber], Roomnumber });

  if (playersinRoom === 2) {
    io.in(`room ${Roomnumber}`).emit('Start', { bool: true });
    Roomnumber += 1;
    playersinRoom = 0;
  }


  socket.on('Setup', (data) => {
    const keys = Object.keys(colorsSetup);
    if (keys.length % 2 === 0) {
      player1id = socket.id;
      colorsSetup[socket.id] = data;
      colorsSetup[socket.id].id = socket.id;
    } else if (keys.length % 2 === 1) {
      colorsSetup[socket.id] = data;
      colorsSetup[socket.id].id = socket.id;

      colorsSetup[player1id].opponent = socket.id;
      colorsSetup[socket.id].opponent = player1id;
      const player1 = colorsSetup[player1id];
      const player2 = colorsSetup[socket.id];

      // console.dir(player2);
      const grid = circleobjs[player1.roomNumber];

      grid[3][3] = { x: 350, y: 350, R: player1.R, G: player1.G, B: player1.B };
      grid[4][4] = { x: 450, y: 450, R: player1.R, G: player1.G, B: player1.B };
      grid[3][4] = { x: 350, y: 450, R: player2.R, G: player2.G, B: player2.B };
      grid[4][3] = { x: 450, y: 350, R: player2.R, G: player2.G, B: player2.B };

      circleobjs[player1.roomNumber] = grid;

      io.in(`room ${player1.roomNumber}`).emit('SetupfromServer', { grid, player1: 2, player2: 2 });

      socket.broadcast.to(player1id).emit('Turn', { turn: true });
    }
  });

  console.log('user has joined a room');


  socket.on('updateCanvas', (data) => {
    console.log('recieved circle');
    let player1count = 0;
    let player2count = 0;
    /*
    let x = (data.circle.x - 50) / 100;
    let y = (data.circle.y - 50) / 100;

    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }

    const array = circleobjs[data.roomNumber];
    if (array[x][y] === null) {
      array[x][y] = data;
    }
    */

    let filled = true;

    circleobjs[data.roomNumber] = data.circleGrid;

    const grid = circleobjs[data.roomNumber];

    console.dir(grid);

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (grid[x][y] == null) {
          filled = false;
          break;
        }
      }
      if (filled === false) {
        break;
      }
    }


    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const object = grid[x][y];

        if (object != null && object.circle.R === 0) {
          player1count += 1;
        } else if (object != null && object.circle.R === 255) {
          player2count += 1;
        }
      }
    }


    io.in(`room ${data.roomNumber}`).emit('UpdatefromServer', { circleGrid: circleobjs[data.roomNumber], player1: player1count, player2: player2count, filled });

    if (filled === true) {
      filled = false;
    }

    socket.broadcast.to(colorsSetup[socket.id].opponent).emit('Turn', { turn: true });

    console.log('broadcasting circle');
  });


  socket.on('disconnect', () => {
    if (colorsSetup[socket.id]) {
      if (Object.prototype.hasOwnProperty.call(colorsSetup[socket.id], 'opponent')) {
        socket.broadcast.to(colorsSetup[socket.id].opponent).emit('Quit', {});
      }
    } else if (circleobjs[Roomnumber].numOfpeople === 1) {
      Roomnumber += 1;
      playersinRoom = 0;
    }

    console.log('user left the room');
  });
});

console.log(`Listening on localhost on ${port}`);
