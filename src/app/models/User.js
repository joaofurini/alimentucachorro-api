const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING(80),
        name: Sequelize.STRING(80),
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING(80)
      },
      { sequelize, timestamps: true }
    );

    this.addHook("beforeSave", async adminUser => {
      if (adminUser.password) {
        adminUser.password_hash = await bcrypt.hash(adminUser.password, 8);
      }
    });
    return this;
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
module.exports = User;
