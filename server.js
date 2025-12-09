const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello from Node server!");
  res.end();
});
server.listen(1000, () => console.log("Server running..."));
