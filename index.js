
//------------ Requirements ------------//
var express = require('express');
var app = express();
var path = require('path');

var http = require('http').Server(app);
var io = require('socket.io')(http);



//------------ Middlware ------------//
app.use(express.static(path.join(__dirname, './public')));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});



//------------ Set Port & Start Server ------------//
http.listen(3000, function(){
  console.log('listening on *:3000');
});
