import express from "express";
import {location_get} from "../controllers/location.js";

const router = express.Router();

router.get("/", location_get);

export default router;
