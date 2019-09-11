const User = require("../models/User");

class UserController {
  async store(req, res) {
    const { email, password, name } = req.body;
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: "Este email ja esta sendo usado" });
    }

    const user = await User.create({ email, name, password });

    return res
      .status(201)
      .json({ message: "O usuário foi criado com sucesso" });
  }

  async list(req, res) {
    const users = await User.findAll();

    if (!users) {
      return res.status(404).json({ message: "Nenhum usuario cadastrado" });
    }

    return res.status(200).json(users);
  }

  async update(req, res) {
    console.log(req.userId);
    return res.json({ ok: "teste" });
  }
}

module.exports = new UserController();
