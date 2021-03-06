const express=require('express');
const socket=require('socket.io');

//app setup
const app=express();


const server=app.listen(4000,()=>{
    console.log('up up and away on port 4000');
});

//server index.html
app.use(express.static('public'));

//connect to server
const io=socket(server);

//client connection
io.on('connection',socket=>{
    console.log(`${socket.id} is connected`);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    });
});