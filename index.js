
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
//server.listen(3000);


server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

console.log("this is the __dirname: " + __dirname);
app.use(express.static(path.join(__dirname, 'public')));


var rooms = 0;

io.on('connection', function(socket){
	console.log("User connected!");
});