import express from 'express';
import { signIn_post } from '../controllers/signIn.js';
const router = express.Router();

router.route('/').post(signIn_post);

export default router;
