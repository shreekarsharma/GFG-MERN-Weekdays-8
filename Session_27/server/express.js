import express from "express";
import fs from "fs";
const app = express();
app.get("/", (req, res) => {
  res.end("home page");
});
app.get("/about", (req, res) => {
  res.end("about page");
});
app.get("/contact", (req, res) => {
  fs.readFile("contact.html", (err, data) => {
    res.end(data);
  });
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
