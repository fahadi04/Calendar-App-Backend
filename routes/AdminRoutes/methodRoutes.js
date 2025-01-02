const express = require("express");
const {
  getMethods,
  createMethod,
  updateMethod,
  deleteMethod,
} = require("../../controllers/Admin/methodController");
const CommunicationMethod = require("../../models/AdminModels/methodModel");

const router = express.Router();

router.get("/", getMethods);
router.post("/", createMethod);
// router.put("/:id", updateMethod);
router.put("/:id", async (req, res) => {
  try {
    const updatedMethod = await CommunicationMethod.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMethod) {
      return res.status(404).send("Method not found");
    }
    res.json(updatedMethod);
  } catch (error) {
    res.status(500).send("Error updating method");
  }
});
router.delete("/:id", deleteMethod);

module.exports = router;
