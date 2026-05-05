const http = require("http");

const server = http.createServer((req, res) => {
  res.end("CI/CD Setup Working 🚀");
});

server.listen(3000);
