const { z } = require("zod");
const Genders = require("../const/gender");

const user = z.object({
  name: z.string().min(2).max(100),
  gender: z.enum(Object.values(Genders)),
});

const createUser = user.strict();

const updateUser = user.partial().strict();

module.exports = {
  createUser,
  updateUser,
};
