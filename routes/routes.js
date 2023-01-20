import express from 'express';
import {userSignup, userLogIn } from '../controllers/userController.js';
import { getProducts,  getProductById } from '../controllers/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controllers/payment-controller.js';

const router = express.Router();

router.post('/api/signup', userSignup);
router.post('/api/login', userLogIn);

router.get('/api/products', getProducts);
router.get('/api/product/:id', getProductById);

router.post('/api/payment', addPaymentGateway);
router.post('/api/callback', paymentResponse);


//router.post('/addProduct', addNewProductToDb )



export default router;

