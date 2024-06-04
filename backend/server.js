import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRouter from './routes/user.route.js'
import roomRouter from './routes/room.router.js'
import favouriteRouter from './routes/favourite.route.js'
import reviewRouter from './routes/review.route.js'

import { connect } from './db/connect.js';

const app=express();
dotenv.config();

const PORT = 5000;

app.use(cors({
     origin: 'http://localhost:5173',
     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
     credentials: true, // if you need to handle cookies
     allowedHeaders: 'Content-Type,Authorization',
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())
app.use( express.static('public'));


app.get("/", (req,res)=>{
    res.json("Hello from server")
})
app.use("/api/users",userRouter);
app.use("/api/rooms",roomRouter);
app.use("/api/favourites",favouriteRouter);
app.use("/api/reviews",reviewRouter);

connect();
app.listen(PORT,(()=>console.log("Server started on PORT",PORT)))