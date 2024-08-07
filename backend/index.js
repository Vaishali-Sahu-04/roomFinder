import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import userRouter from "./routes/user.route.js";
import roomRouter from "./routes/room.router.js";
import reviewRouter from "./routes/review.route.js";

import { connect } from "./db/connect.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const allowedOrigin = process.env.CORS_ORIGIN;

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true, // if you need to handle cookies
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use("/api/users", userRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/reviews", reviewRouter);

// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

connect();
app.listen(PORT, () => console.log("Server started on PORT", PORT));
