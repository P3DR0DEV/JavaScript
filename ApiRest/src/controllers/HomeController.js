import Aluno from '../models/Aluno';

class HomeController {
  async create(req, res) {
    try {
      const {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      } = req.body;
      const novoAluno = await Aluno.create({
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
      return res.json(novoAluno);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: 'ID não enviado' });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Cannot find Student'],
        });
      }
      aluno.destroy();
      return res.json('Aluno removido da base de dados.');
    } catch (e) {
      console.log(e);
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: 'ID não enviado' });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Cannot find Student'],
        });
      }
      const alunoUpdate = await aluno.update(req.body);
      return res.json(alunoUpdate);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Cannot find Student'] });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json(null);
    }
  }
}

export default new HomeController();
