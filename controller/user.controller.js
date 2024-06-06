const userServices = require("../services/user.services");
const Role = require("../helpers/role");

const userRegister = (req, res, next) => {
    userServices
        .create(req.body)
        .then((user) =>
            res.json({
                user: user,
                message: `User Registered successfully with email id ${req.body.email}`,
            })
        )
        .catch((error) => next(error));
}

const userAuthentication = (req, res, next) => {
  userServices
    .authenticate(req.body)
    .then((user) => {
      console.log(user);
      user
        ? res.json({ user: user, message: "User logged-in successfully" })
        : res
            .status(400)
            .json({ message: "Username or password is incorrect." });
    })
    .catch((error) => next(error));
}

const userUpdate = (req, res, next) => {
  userServices
    .update(req.params.id, req.body)
    .then(() =>
      res.json({
        message: `User with id: ${req.params.id} updated successfully.`,
      })
    )
    .catch((error) => next(error));
}

const userDelete = (req, res, next) => {
  userServices
    .delete(req.params.id)
    .then(() =>
      res.json({
        message: `User with id: ${req.params.id} deleted successfully.`,
      })
    )
    .catch((error) => next(error));
}

const getAll = (req, res, next) => {
  const currentUser = req.user;
  if (currentUser.role !== Role.Admin) {
    return res.status(401).json({ message: "Not Authorized!" });
  }
  userServices
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

const getCurrent = (req, res, next) => {
  console.log(req);
  userServices
    .getById(req.user.sub)
    .then((user) => (user ? res.json(user) : res.status(404)))
    .catch((error) => next(error));
}

const getById = (req, res, next) => {
  userServices
    .getById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "User Not Found!" });
        next();
      }
      return res.json(user);
    })
    .catch((error) => next(error));
}

module.exports = {userRegister, userUpdate, userDelete, userAuthentication, getAll, getCurrent, getById}