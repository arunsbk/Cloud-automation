const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Simple API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express API running on AWS EC2!" });
});

// Main route (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// IMPORTANT: Listen on 0.0.0.0 (required for EC2 public access)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
