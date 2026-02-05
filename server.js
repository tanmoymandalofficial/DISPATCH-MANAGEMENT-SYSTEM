require("dotenv").config();
const express = require("express");
const connectToDb = require("./database/db");
const dispatchRoutes = require("./routes/dispatch-routes");

// Main app
const app = express();

// connect to db
connectToDb();

// middleware
app.use(express.json());

// router misddleware
app.use("/api/dispatch", dispatchRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is now running on port " + port);
});
