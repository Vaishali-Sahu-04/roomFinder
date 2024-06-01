import express from 'express'
import { filteredLocation } from '../controllers/location.controller.js';

const router = express.Router();

router.get("/filter-rooms",filteredLocation);

export default router;