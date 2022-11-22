var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket)=> {
    console.log("User connected on socket id ${socket.id}")
    socket.on('canvas-data', (data)=> {
        socket.broadcast.emit('canvas-data', data);
    })
})

var port = process.env.YOUR_PORT || process.env.PORT || 8080;
http.listen(port, () =>{
    console.log("Started on: " + port);
})