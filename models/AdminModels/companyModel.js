const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  location: String,
  linkedin: String,
  emails: [String],
  phoneNumbers: [String],
  comments: String,
  periodicity: String,
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
