const express = require("express");
const cors = require("cors");
const config = require("./config");
const mongoose = require("mongoose");
const loadTestData = require("./testData");
const helmet = require("helmet");
const mongoSanitize = require("mongo-sanitize");

const app = express();

//import routes
const productRoutes = require("./routes/product.routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", productRoutes);
app.use(helmet());
app.use((req, res, next) => {
  mongoSanitize(req.body);
  next();
});

// connects our back end code with the database
mongoose.connect(config.DB, {
  useNewUrlParser: true
});
let db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
  loadTestData();
});
db.on("error", err => console.log("Error " + err));

app.listen(config.PORT, function() {
  console.log("Server is running on port:", config.PORT);
});
