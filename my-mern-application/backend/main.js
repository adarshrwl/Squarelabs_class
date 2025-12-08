const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello");
  }
});

server.listen(5000, () => {
  console.log("server is running on port 5000");
});
