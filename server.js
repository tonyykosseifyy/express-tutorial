const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const logger = require("./middleware/logger");
const bootcamps = require("./routes/bootcamps");
const morgan = require("morgan");

// INITALIZE APP ;
const PORT = process.env.PORT;
const app = express();

// DEV MIDDLEWARE
if ( process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
};

app.use("/api/v1/bootcamps" ,bootcamps);

mongoose.connect(
  process.env.MONGOOSE_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB connected")
);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
