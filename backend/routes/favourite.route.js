import express from 'express'
//import { verifyJWT } from '../middlewares/auth.middleware.js';
import { addToFavourite, removeFavourite } from '../controllers/favourite.controller.js';
import JWTVerify from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/add", JWTVerify, addToFavourite)
router.post("/remove", JWTVerify, removeFavourite)

export default router;