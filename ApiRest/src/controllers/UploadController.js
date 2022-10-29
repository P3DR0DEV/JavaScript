import multer from 'multer';
import multerCFG from '../config/multerCFG';
import Foto from '../models/Foto';

const uploads = multer(multerCFG).single('profilePic');

class UploadController {
  create(req, res) {
    return uploads(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const upload = await Foto.create({ filename, originalname, aluno_id });

        return res.json(upload);
      } catch (e) {
        return res.status(400).json({ errors: 'Aluno não existe.' });
      }
    });
  }
}

export default new UploadController();
