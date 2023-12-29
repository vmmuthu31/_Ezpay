const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const dbURI =
  "mongodb+srv://vairamuthu:vairamuthu@cluster0.2qcddvx.mongodb.net/Ezpay";

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));
