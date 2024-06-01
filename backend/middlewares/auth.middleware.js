import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import User from '../models/user.model.js';

const JWTVerify = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            throw new ApiError(401, 'Unauthorized: No token provided');
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken.userId);

        if (!user) {
            throw new ApiError(401, 'Unauthorized: User not found');
        }
        req.user = user;
        next();
    } 
    catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            throw new ApiError(401, 'Unauthorized: Invalid or expired token');
        } else {
            next(error); // Pass other errors to the error handler middleware
        }
    }
};

export default JWTVerify;
