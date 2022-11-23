var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let connections = [];

io.on('connection', (socket) => {
    connections.push(socket);
    console.log("User connected on socket id: " + socket.id)
    socket.on('canvas-data', (data) => {
        connections.forEach((con) => {
            if (con.id !== socket.id) {
                con.emit('canvas-data', data);
            }
        });
    });
    socket.on('down', (data) => {
        connections.forEach((con) => {
            if (con.id !== socket.id) {
                con.emit("ondown", data)
            }
        });
    });
    socket.on("disconnect", (reason) => {
        connections = connections.filter((con) => con.id !== socket.id);
        console.log("User disconnected on socket id: " + socket.id)
    });
    
});

var port = process.env.YOUR_PORT || process.env.PORT || 8080;
http.listen(port, () => {
    console.log("Started on: " + port);
})