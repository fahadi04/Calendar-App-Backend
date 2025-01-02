// const express = require("express");
const Method = require("../models/Method"); 

const router = express.Router();

// Get all methods
router.get("/", async (req, res) => {
  try {
    const methods = await Method.find();
    res.json(methods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching methods" });
  }
});

// Delete a method by ID
router.delete("/:id", async (req, res) => {
  try {
    await Method.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Method deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting method" });
  }
});

module.exports = router;
