import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';


import userRouter from './routes/user.route.js'
import roomRouter from './routes/room.router.js'
import favouriteRouter from './routes/favourite.route.js'
import locationRouter from './routes/location.route.js'

import { connect } from './db/connect.js';

const app=express();
dotenv.config();

const PORT = 5000;

app.use(express.urlencoded({extended: true, limit:"16kb"}));
app.use(express.json({limit: "16kb"}));
app.use(cookieParser())
express.static('public')

app.get("/", (req,res)=>{
    res.json("Hello from server")
})
app.use("/api/users",userRouter);
app.use("/api/rooms",roomRouter);
app.use("/api/favourites",favouriteRouter);
app.use("/api/locations",locationRouter);

connect();
app.listen(PORT,(()=>console.log("Server started on PORT",PORT)))