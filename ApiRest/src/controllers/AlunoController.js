import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [
        'id',
        'nome',
        'sobrenome',
        'email',
        'idade',
        'peso',
        'altura',
      ],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['Missing ID'] });

      const aluno = await Aluno.findByPk(id, {
        attributes: [
          'id',
          'nome',
          'sobrenome',
          'email',
          'idade',
          'peso',
          'altura',
        ],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) return res.status(404).json({ errors: ['Not Found'] });

      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['Missing ID'] });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(404).json({ errors: ['Not Found'] });

      await aluno.destroy();
      return res.json('Aluno removido da base de dados');
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['Missing ID'] });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(404).json({ errors: ['Not Found'] });

      const novoAluno = await aluno.update(req.body);

      return res.json({ novoAluno });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}
export default new AlunoController();
