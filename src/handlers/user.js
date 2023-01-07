const serverless = require("serverless-http");
const {
  validateRequest,
  validateRequestBody,
  validateRequestQuery,
} = require("zod-express-middleware");
const UserService = require("../services/user.service");
const app = require("../utils/express-app");
const pagination = require("../validations/pagination.validation");
const { createUser, updateUser } = require("../validations/user.validation");

app.post("/user", validateRequestBody(createUser), async (req, res) => {
  try {
    const createdUser = await UserService.addUser(
      req.body.name,
      req.body.gender
    );
    res.status(201).send(createdUser);
  } catch {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/user", validateRequestQuery(pagination), async (req, res) => {
  try {
    const users = UserService.getUsers(
      req.query.limit ?? 10,
      req.query.skip ?? 0
    );
    const count = UserService.getUserCount();

    const [userList, totalCount] = await Promise.all([users, count]);
    res.status(200).send({ userList, totalCount });
  } catch {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(200).send(user);
  } catch {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.put("/user/:id", validateRequestBody(updateUser), async (req, res) => {
  try {
    const updatedUser = await UserService.updateUserById(
      req.params.id,
      req.body
    );
    res.status(200).send(updatedUser);
  } catch {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const deletedUser = await UserService.deleteUserById(req.params.id);
    res.status(200).send(deletedUser);
  } catch {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports.handler = serverless(app);
