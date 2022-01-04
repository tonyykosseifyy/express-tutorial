const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

// INITALIZE APP ;
const PORT = process.env.PORT;
const app = express();

app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, data: { name: "Brad" } });
});

mongoose.connect(
  process.env.MONGOOSE_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB connected")
);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
