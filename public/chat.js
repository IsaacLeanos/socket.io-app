//make connection
const socket=io.connect('http://localhost:4000');

//query DOM
const message=document.getElementById('message');
const handle=document.getElementById('handle');
const button=document.getElementById('button');
const output=document.getElementById('output');

//trigger events
button.addEventListener('click',function(){
    socket.emit('chat',{
        handle:handle.value,
        message:message.value
    });
});


//listen for events
socket.on('chat',function(data){
    output.innerHTML+='<p><strong>'+data.handle +':</strong>'+data.message+'</p>';
});