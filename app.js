const http = require("http");

const server = http.createServer((req, res) => {

  res.end(" Version 3 deployed successfully without any error🔥");
});

server.listen(3000);
