const http = require("http");

const server = http.createServer((req, res) => {
  res.end(" Version 2 deployed 🔥");
});

server.listen(3000);
