const http = require("http");

function createServer() {
  return http.createServer((req, res) => {
    res.end("Version 3 deployed 🚀");
  });
}

module.exports = createServer;
