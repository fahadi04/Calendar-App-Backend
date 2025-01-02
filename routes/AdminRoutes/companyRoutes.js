const express = require("express");
const {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../../controllers/Admin/companyController");
const Company = require("../../models/AdminModels/companyModel");

const router = express.Router();

router.get("/", getCompanies);
router.post("/", createCompany);
// router.put("/:id", updateCompany);
router.put("/:id", async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCompany) {
      return res.status(404).send("Company not found");
    }
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).send("Error updating company");
  }
});
router.delete("/:id", deleteCompany);

module.exports = router;
