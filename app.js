const http = require("http");

const server = http.createServer((req, res) => {
  res.end("CI/CD Setup Working 🚀");
  res.end("CI/CD Setup Working successfully 🚀");
});

server.listen(3000);
