import { Router } from 'express';
import userController from '../controllers/UserController';
import loggedUser from '../middlewares/loggedUser';

const router = new Router();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.create);
router.delete('/', loggedUser, userController.delete);
router.put('/', loggedUser, userController.update);

export default router;
