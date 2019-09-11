const { Router } = require("express");
const routes = new Router();
const UserController = require("../src/app/controllers/UserController");

//Rotas de usuarios
routes.post("/users", UserController.store);
module.exports = routes;
