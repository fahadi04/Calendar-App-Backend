const Company = require("../../models/AdminModels/companyModel");

// Get all companies
const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies" });
  }
};

// Create a new company
const createCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: "Error adding company" });
  }
};

// Update an existing company
const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: "Error updating company" });
  }
};

// Delete a company
const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting company" });
  }
};

module.exports = { getCompanies, createCompany, updateCompany, deleteCompany };
