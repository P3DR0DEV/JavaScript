import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);
router.get('/:id', homeController.show);

router.post('/', homeController.create);
router.delete('/:id', homeController.delete);
router.put('/:id', homeController.update);

export default router;
