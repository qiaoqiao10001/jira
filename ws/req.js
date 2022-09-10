let socket = new WebSocket("ws://127.0.0.1:30000");

let stringData = "hello world";

socket.send(stringData);
