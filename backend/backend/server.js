const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("🚀 May Bank Backend is running...");
});

// Example login route (admin demo)
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "Chizz4034@gmail.com" && password === "Abuchi1#") {
    res.json({ success: true, role: "admin", message: "Welcome Admin" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
