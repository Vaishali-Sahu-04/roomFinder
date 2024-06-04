import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import User from '../models/user.model.js';

const JWTVerify = async (req, res, next) => {
    try {
        console.log("req.cookies in jwtverify ",req?.cookies?.jwt);
        const token = req?.cookies?.jwt;
        if(!token){
            throw new ApiError(400,"Unauthorized - No token provided");
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded) throw new ApiError(400,"Unauthorized - Invalid token");
       
        const user = await User.findById(decoded.userId).select("-password");

        if(!user) throw new ApiError(400,"User not found");

        req.user = user;
        next();

    } catch (error) {
        console.log('Error in JWTVerify middleware',error.message);
        throw new ApiError(500,"Internal Server Error");
    }
};

export default JWTVerify;
