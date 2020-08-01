import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/user', (req, res) => {
  return createUserController.handle(req, res);
});

export { router };
