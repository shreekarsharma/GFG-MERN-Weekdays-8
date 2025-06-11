import express from "express";
const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
let loginStatus = false;
app.use((req, res, next) => {
  console.log("Middleware Called and checked no input was empty");
//   req.body.username = "shreekar";

  next();
  //   res.end("middleware ended the request");
});
app.use((req, res, next) => {
  if (!loginStatus) {
    next();
  } else {
    res.end("not logged in");
  }
  //   res.end("middleware ended the request");
});
app.get("/", (req, res) => {
  res.send(req.body.username);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
