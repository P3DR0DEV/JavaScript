import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loggedUser from '../middlewares/loggedUser';

const router = new Router();

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.show);

router.post('/', loggedUser, AlunoController.create);
router.delete('/:id', loggedUser, AlunoController.delete);
router.put('/:id', loggedUser, AlunoController.update);

export default router;
