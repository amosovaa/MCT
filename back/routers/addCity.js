import express from 'express';
import { citiAdd_post, citiAdd_get } from '../controllers/addCity.js';

const router = express.Router();
router.get('/', citiAdd_get);
router.post('/', citiAdd_post);

export default router;
