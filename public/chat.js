//make connection
const socket=io.connect('http://localhost:4000');

//query DOM
const message=document.getElementById('message');
const handle=document.getElementById('handle');
const button=document.getElementById('send');
const output=document.getElementById('output');
const feedback=document.getElementById('feedback');

//trigger events
button.addEventListener('click',function(){
    socket.emit('chat',{
        handle:handle.value,
        message:message.value
    });
});

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value);
});


//listen for events
socket.on('chat',function(data){
    feedback.innerHTML='';
    output.innerHTML+='<p><strong>'+data.handle +': </strong>'+data.message+'</p>';
});

socket.on('typing',function(data){
    feedback.innerHTML='<p><em>'+data+' is typing... </em></p>';
});