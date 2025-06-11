import express from "express";
import fs from "fs";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 5000;
// GET REQUEST
app.get("/home", (req, res) => {
  res.end("Home Page");
});
// POST REQUEST
app.post("/login", (req, res) => {
  fs.writeFile("data.json", JSON.stringify(req.body), "utf-8", (err) => {
    if (err) {
      console.error(err);
    } else {
      res.end("data saved successfully");
    }
  });
});
// PUT REQUEST
app.put("/update", (req, res) => {
  fs.writeFile("data.json", JSON.stringify(req.body), "utf-8", (err) => {
    if (err) {
      console.error(err);
    } else {
      res.end("data updated successfully");
    }
  });
});
// DELETE REQUEST
app.delete("/remove", (req, res) => {
  fs.unlink("data.json", (err) => {
    if (err) {
      console.error(err);
    } else {
      res.end("data deleted successfully");
    }
  });
});
// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
