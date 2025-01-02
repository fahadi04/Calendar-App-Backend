const Method = require("../../models/AdminModels/methodModel");

// Get all communication methods
const getMethods = async (req, res) => {
  try {
    const methods = await Method.find();
    res.json(methods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching methods" });
  }
};

// Create a new method
const createMethod = async (req, res) => {
  try {
    const newMethod = new Method(req.body);
    await newMethod.save();
    res.status(201).json(newMethod);
  } catch (error) {
    res.status(500).json({ message: "Error adding method" });
  }
};

// Update an existing method
const updateMethod = async (req, res) => {
  try {
    const updatedMethod = await Method.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMethod);
  } catch (error) {
    res.status(500).json({ message: "Error updating method" });
  }
};

// Delete a method
// const deleteMethod = async (req, res) => {
//   try {
//     await Method.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Method deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting method" });
//   }
// };

const deleteMethod = async (req, res) => {
  try {
    await Method.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Method deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting method" });
  }
};

module.exports = { getMethods, createMethod, updateMethod, deleteMethod };
