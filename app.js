const createServer = require("./server");

const server = createServer();
server.listen(process.env.PORT || 3000);
