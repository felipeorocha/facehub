const { Router } = require("express");
const DevController = require("./controllers/DevController");
const ProductController = require("./controllers/ProductController");

const routes = Router();

// Dev/user routes
routes.get("/devs", DevController.index);
routes.get("/devs/:id", DevController.show);
routes.delete("/devs/:id", DevController.destroy);
routes.post("/devs", DevController.store);
routes.put("/devs/:id", DevController.update);

// Product routes
routes.get("/product", ProductController.index);
routes.get("/product/:id", ProductController.show);
routes.delete("/product/:id", ProductController.destroy);
routes.post("/product", ProductController.store);
routes.put("/product/:id", ProductController.update);

module.exports = routes;