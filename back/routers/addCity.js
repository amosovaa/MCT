import express from "express";
import { citiAdd_post } from '../controllers/addCity.js';

const router = express.Router();

router.post("/", citiAdd_post);

export default router;
