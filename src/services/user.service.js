const userModel = require("../database/models/user.model");

class UserService {
  static async addUser(name, gender) {
    return await userModel.create({
      name,
      gender,
    });
  }

  static async getUserById(id) {
    return await userModel.findById(id);
  }

  static async getUsers(limit = 10, skip = 0) {
    return await userModel.find().limit(limit).skip(skip);
  }

  static async updateUserById(id, data) {
    return await userModel.findByIdAndUpdate(id, data);
  }
  static async deleteUserById(id) {
    return await userModel.findByIdAndDelete(id);
  }
  static async getUserCount() {
    return await userModel.countDocuments();
  }
}

module.exports = UserService;
