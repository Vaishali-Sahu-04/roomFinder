import express from 'express'
import {getAllRooms, uploadRoom} from '../controllers/room.controller.js'
import { upload } from '../middlewares/multer.middleware.js';


const router=express.Router();

router.get("/",getAllRooms);
router.post("/uploadroom",upload.array("images",10),uploadRoom);


export default router;