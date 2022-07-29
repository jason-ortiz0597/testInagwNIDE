import { Router } from 'express';

const router = Router();

router.get('/listProduct');

router.get('/listProduct/:id');

router.post('/createProduct');

router.put('/updateProduct/:id');

router.delete('/deleteProduct/:id');


export default router;