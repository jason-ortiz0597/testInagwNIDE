import { Router } from 'express';

import fileUpload from 'express-fileupload';

import { listProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = Router();

router.get('/listProduct', listProduct);

router.post('/createProduct', fileUpload({ useTempFiles: true, tempFileDir: './tmp' }), createProduct);

router.put('/updateProduct/:id', updateProduct);

router.delete('/deleteProduct/:id', deleteProduct);


export default router;