const mongoose = require("mongoose");

const DevSchema = new mongoose.Schema({
  github_user: String,
  name: String,
  bio: String,
  avatar_url: String,
  techs: [String]
});

module.exports = mongoose.model('Dev', DevSchema);
