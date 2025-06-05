import http from "http";
import fs from "fs";
const PORT = 5000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("homepage");
  }
  if (req.url == "/about") {
    fs.writeFile(
      "demo.txt",
      "this is the text in new demo file",
      "utf-8",
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
    fs.readFile("demo.txt", "utf-8", (err, data) => {
      res.end(data);
    });
  }
});
server.listen(PORT, () => {
  console.log("Server on PORT " + PORT);
});
