const ws = require("ws");

const webSocketServer = new ws.Server({
  port: 30000,
});

webSocketServer.on("listening", (socket) => {
  console.log("wss begin listern");
});

// 监听的是 WebSocket 服务被客户端连接上的事件
webSocketServer.on("connection", (socket, req) => {
  // 监听的是 服务端收到了客户端发来的消息 事件
  socket.on("message", (data) => {
    console.log(data);
    if (data === "terminate") {
      socket.close();
      setTimeout(() => {
        webSocketServer.close();
      }, 3000);
    }
  });

  // 监听的是，服务端收到了客户端关闭连接的事件，由客户端发起的关闭
  socket.on("close", (code, reason) => {
    console.log(code);
    console.log(reason);
  });

  // 监听的是，WebSocket 通信过程中出错的事件
  socket.on("error", (error) => {
    console.log("error:");
    console.log(error);
  });

  const ip = req.connection.remoteAddress;
  console.log(ip + " is connected");
  socket.send("hi");
});
