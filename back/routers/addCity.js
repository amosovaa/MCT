import express from 'express';
import {
  citiAdd_post,
  citiAdd_get,
  citi_delete,
} from '../controllers/addCity.js';

const router = express.Router();
router.get('/', citiAdd_get);
router.post('/', citiAdd_post);
router.delete('/:id', citi_delete);

export default router;
