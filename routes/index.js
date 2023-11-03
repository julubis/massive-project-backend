import express from 'express';
import getAllFood from '../controllers/food.js';

const router = express.Router();

router.get('/foods', getAllFood);

export default router;