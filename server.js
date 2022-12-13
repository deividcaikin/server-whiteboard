var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/app/views/';
app.use(express.static(path));
var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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
http.listen(port,'0.0.0.0' )
app.get('/backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});