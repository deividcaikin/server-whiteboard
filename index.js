var app = require('express')();
const path = __dirname +'/app/views';
app.use(express.static(path));
app.get('/',function(req,res){
    res.sendFile(path + "index.html")
});