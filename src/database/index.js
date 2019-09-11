const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const user = require("../app/models/User");

const models = [user];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
