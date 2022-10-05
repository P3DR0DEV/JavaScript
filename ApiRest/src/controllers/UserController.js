import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const { nome, email, password } = req.body;

      const novoUser = await User.create({
        nome,
        email,
        password,
      });
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['Cannot find user'] });
      }
      return res.status(200).json({ userId: user.id, userNome: user.nome, userEmail: user.email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['Cannot find User'],
        });
      }

      user.destroy();
      return res.status(200).json('User Deleted');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Cannot find User'],
        });
      }
      const userUpdated = await user.update(req.body);

      return res.status(200).json(userUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
