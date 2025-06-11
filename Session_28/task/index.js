import http from "http";
import fs from "fs";
const PORT = 5000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    
  if (req.url == "/home") {
    fs.readFile("homepage.html", "utf-8", (err, data) => {
      if(err){
        console.error(err);
      }else{
        res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
      }
    });
  }
  if (req.url == "/about") {
    fs.writeFile("about.html", "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Dummy Homepage</title><style>body{margin:0;font-family:Arial,sans-serif;background:#f4f4f4;color:#333;text-align:center;padding:50px}h1{color:#007acc}p{font-size:1.2em;margin-top:10px}</style></head><body><h1>Welcome to the Dummy Aboutpage</h1><p>This is a simple placeholder page served using a Node.js server.</p></body></html>", "utf-8", (err) => {
      console.error(err);
    });
    fs.readFile("about.html", "utf-8", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  }
});
server.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
