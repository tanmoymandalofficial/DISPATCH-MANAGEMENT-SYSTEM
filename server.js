require("dotenv").config();
const express = require("express");
const connectToDb = require("./database/db");
const dispatchRoutes = require("./routes/dispatch-routes");
const userRoutes = require("./routes/user-routes");
const authMiddleware = require('./middleware/auth-middlewate');

// Main app
const app = express();

// connect to db
connectToDb();

// middleware
app.use(express.json());

// router misddleware
app.use("/api/dispatch", authMiddleware, dispatchRoutes);
app.use("/api/user", userRoutes);





const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is now running on port " + port);
});
