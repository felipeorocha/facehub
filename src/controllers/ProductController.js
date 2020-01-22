const ProductModel = require("../models/Product");
const axios = require("axios");

// index, show, store, update, destroy

module.exports = {
  async store(req, res) {
    const product = await ProductModel.create(req.body);

    return res.json(product);
  },

  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await ProductModel.paginate({}, { page, limit: 10 });
    return res.json(products);
  },

  async show(req, res) {
    const { id } = req.params;
    // const dev = await ProductModel.findById({ "_id": id });
    const product = await ProductModel.findOne({ "_id": id });
    return res.json(product);
  },

  async update(req, res) {
    const { id } = req.params;
    // const dev = await ProductModel.findOneAndUpdate(id, req.body, { new: true });
    const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    return product;
  },

  async destroy(req, res) {
    const { id } = req.params;
    // await ProductModel.findByIdAndRemove({ "_id": id });
    await ProductModel.deleteOne({ "_id": id });
    return res.send();
  }
}


