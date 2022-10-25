import multer from 'multer';
import multerCFG from '../config/multerCFG';

const uploads = multer(multerCFG).single('profilePic');

class UploadController {
  create(req, res) {
    return uploads(req, res, (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }
      return res.json(req.file);
    });
  }
}

export default new UploadController();
