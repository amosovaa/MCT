import express from 'express';
import {signUp_post} from '../controllers/signUp.js'
const router = express.Router();

router.route('/').post(signUp_post);

export default router