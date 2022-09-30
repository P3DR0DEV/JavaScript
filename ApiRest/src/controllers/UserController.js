import User from '../models/User';

class UserController {
  async create(req, res) {
    const novoUser = await User.create({
      nome: 'Pedro',
      email: 'pedrohenriquecampomendes@gmail.com',
      password: '25042904sddL!',
    });
    res.json(novoUser);
  }
}

export default new UserController();
