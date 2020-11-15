var express = require("express");
const { version } = require("process");
var app = express();
app.use(express.static("./public")); // show for user Ex: html,css,js
app.set("view engine", "ejs");
app.set("views", "./views"); // views dictionary
var server = require("http").Server(app);
var io = require("socket.io")(server);
// 
server.listen(8888);
// listen socket io
io.on("connection", function(socket){

   
    console.log("Connecting to socket: " + socket.id);
    socket.on("disconnect",function(){
        console.log("disConnecting to socket: " + socket.id);
    });   
    socket.on
    socket.on("Client-send-data",function(data){
        console.log(data);
        //Phát về toàn client
        io.sockets.emit("Server-send-data",data);
        //Phát về một người
        //socket.emit("Server-send-data", data);
        // Phát toàn bộ người khác
        //socket.broadcast.emit("Server-send-data", data);
    });
// mọi kết nối đều được quản lý bởi socket ID   

});


app.get("/", function (req, res) {
    
    res.render("trangchu.ejs");
});
