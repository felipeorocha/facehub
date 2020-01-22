const DevModel = require("../models/Dev");
const axios = require("axios");

// index, show, store, update, destroy

module.exports = {
  async store(req, res) {
    const { github_username, techs } = req.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { login: name, avatar_url, bio } = apiResponse.data;

    const subTechs = techs.split(', ');

    const devs = await DevModel.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: subTechs
     });

    return res.json(devs);
  },

  async index(req, res) {
    const devsResponse = await DevModel.find();
    return res.json(devsResponse);
  },

  async show(req, res) {
    const { id } = req.params;
    // const dev = await DevModel.findById({ "_id": id });
    const dev = await DevModel.findOne({ "_id": id });
    return res.json(dev);
  },

  async update(req, res) {
    const { id } = req.params;
    // const dev = await DevModel.findOneAndUpdate(id, req.body, { new: true });
    const dev = await DevModel.findByIdAndUpdate(id, req.body, { new: true });
    return dev;
  },

  async destroy(req, res) {
    const { id } = req.params;
    // await DevModel.findByIdAndRemove({ "_id": id });
    await DevModel.deleteOne({ "_id": id });
    return res.send();
  }
}


