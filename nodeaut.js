const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// INITALIZE APP ;
const PORT = process.env.PORT;
const app = express();

const checkToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];

  if (bearerToken !== undefined) {
    const token = bearerToken.split(" ");
    const bearerTok = token[1];
    req.token = bearerTok;
    console.log(bearerTok);
    next();
  } else {
    res.status(403).send("FORBIDDEN");
  }
};

app.get("/", checkToken, (req, res) => {
  res.status(200).json({ success: true, data: { name: "Brad" } });
});

app.post("/login", (req, res) => {
  const user = {
    email: "tonykosseify@gmail.com",
    password: "03018765",
  };
  jwt.sign({ user: user }, "secretKey", (err, token) => {
    res.json(token);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
