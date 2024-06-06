const express = require("express");
const router = express.Router();
const userServices = require("../services/user.services");
const Role = require("../helpers/role");
const jwt = require("../helpers/jwt");
const userController = require('../controller/user.controller');
require('../swagger/userSwaggerConfig');

router.post("/authenticate", userController.userAuthentication);
router.post("/register", userController.userRegister);
router.get("/", jwt(Role.Admin), userController.getAll);
router.get("/current", jwt(), userController.getCurrent);
router.get("/:id", userController.getById);
router.put("/:id", userController.userUpdate);
router.delete("/:id", userController.userDelete);
module.exports = router;
