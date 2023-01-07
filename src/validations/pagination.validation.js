const { z } = require("zod");

const pagination = z.object({
  limit: z.coerce.number().max(100).optional().default(10),
  skip: z.coerce.number().min(0).optional().default(0),
});
module.exports = pagination;
