const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  linkedin: { type: String, required: true },
  emails: [String],
  phoneNumbers: [String],
  comments: String,
  periodicity: String,
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
