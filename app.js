const http = require("http");

const server = http.createServer((req, res) => {

  res.end(" Version 3 deployed successfully 🔥");
});

server.listen(3000);
