import express from 'express';
import {logout_get} from '../controllers/logout.js'

const router = express.Router();

router.get('/',logout_get)

export default router;
