const express = require("express");
const path = require("path");
const app = express();

const connectDB = require("./config/db");
connectDB();

app.use(express.static("public"));
app.use(express.json());
// Template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(process.env.PORT || 3000, () => {
	console.log("Listening on PORT", process.env.PORT || 3000);
});
