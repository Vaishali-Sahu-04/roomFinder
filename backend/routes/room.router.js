import express from 'express'
import {getAllRooms, getRoomById, uploadRoom} from '../controllers/room.controller.js'
import { upload } from '../middlewares/multer.middleware.js';
import JWTVerify from '../middlewares/auth.middleware.js';


const router=express.Router();

router.get("/",getAllRooms);
router.get("/:roomId",getRoomById);
router.post("/uploadroom", JWTVerify, upload.array("images",10), uploadRoom);


export default router;