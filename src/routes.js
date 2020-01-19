const { Router } = require("express");
const DevController = require("./controllers/DevController");

const routes = Router();

routes.get("/devs", DevController.index);
routes.get("/devs/:id", DevController.show);
routes.delete("/devs/:id", DevController.destroy);
routes.post("/devs", DevController.store);

module.exports = routes;