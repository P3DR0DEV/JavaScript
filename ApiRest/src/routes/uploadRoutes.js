import { Router } from 'express';
import loggedUser from '../middlewares/loggedUser';
import UploadController from '../controllers/UploadController';

const router = new Router();

router.post('/', loggedUser, UploadController.create);

export default router;
