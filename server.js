const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const bootcamps = require("./routes/bootcamps");
// INITALIZE APP ;
const PORT = process.env.PORT;
const app = express();

app.use("/api/v1/bootcamps", bootcamps);

mongoose.connect(
  process.env.MONGOOSE_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB connected")
);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
