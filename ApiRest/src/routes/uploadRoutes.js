import multer from 'multer';
import { Router } from 'express';
import UploadController from '../controllers/UploadController';
import multerCFG from '../config/multerCFG';

const uploads = multer(multerCFG);

const router = new Router();

router.post('/', uploads.single('profilePic'), UploadController.create);

export default router;
