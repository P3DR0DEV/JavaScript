import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Henrique',
      email: 'pedrohenriquecampomendes@gmail.com',
      idade: 20,
      peso: 70,
      altura: 1.74,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
