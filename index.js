const cv = require('opencv4nodejs');
const path = require('path');
const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


const FPS=20;
cv.get
const wCap = new cv.VideoCapture(2);
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 500);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 500);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// read images from buffer and keep only the most recent frame
var frame = wCap.read();
setInterval(() => {
  frame = wCap.read(); 
}, 30);

// encode most recent as jpg-image with base64-format
// and emit to socket 
setInterval(() => {
  const image  = cv.imencode('.jpg', frame).toString('base64');
  io.emit('image', image);
}, 1000/FPS);


// setInterval(() => {
//   const frame = wCap.read();
//   const image  = cv.imencode('.jpg', frame).toString('base64');
//   io.emit('image', image);
// }, 1000);

server.listen(3000)
