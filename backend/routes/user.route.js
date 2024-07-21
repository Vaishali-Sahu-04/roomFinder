import express from 'express'

import { signup, login, logout, addRoomToFavourite, removeFavourite } from '../controllers/user.controller.js';

import JWTVerify from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/logout",logout);

router.post("/addRoomToFavorite", JWTVerify, addRoomToFavourite)
router.post("/removeFavorite", JWTVerify, removeFavourite)

export default router;