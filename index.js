const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

//add routes
const userRoute = require("./routes/user.routes");
const travelRoute = require("./routes/travel.routes");
const loggerRoute = require("./routes/logger.routes");
const notificationRoute = require("./routes/notification.routes");
const settingRoute = require("./routes/main.routes");

//app allow
dotenv.config();
app.use(cors());
app.use(express.json());
app.options("*", cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfully"))
  .catch((err) => {
    console.log(err);
  });

//api endpoints
app.use("/api/user", userRoute);
app.use("/api/travel", travelRoute);
app.use("/api/logger", loggerRoute);
app.use("/api/notification", notificationRoute);
app.use("/api/setting", settingRoute);

//get images
app.use("/images", express.static(path.join(__dirname, "routes/images")));

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Api is working! Say hello" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running at " + process.env.PORT);
});
