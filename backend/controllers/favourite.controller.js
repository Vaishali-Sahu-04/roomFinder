import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import Room from "../models/room.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Favourite from "../models/favourite.model.js";

export const addToFavourite = asyncHandler( async(req, res) => {

    const userId = req.user._id;
    const {roomId} = req.body;

    const room = await Room.findById(roomId);
    if(!room) throw new ApiError(400,"Room does not exist");

    const user = await User.findById(userId);
    if(!user) throw new ApiError(400,"User not found")

        const existingFavourite = await Favourite.findOne({ user: userId, room: roomId });
        if (existingFavourite) {
            return res.status(200).json(new ApiResponse(200, existingFavourite, "Room is already in favorites"));
        }
    
        // Create a new favourite and save it
        const newFavourite = new Favourite({ user: userId, room: roomId });
        await newFavourite.save();
    
        // Add the reference to the new favourite to the user's favourites array
        user.favourites.push(newFavourite);
        await user.save();

    return res.status(200).json(
        new ApiResponse(200, newFavourite, "Favourite added successfully"))
})

export const removeFavourite = asyncHandler( async(req, res) => {
    const userId = req.user._id;
    const {roomId} = req.body;

    const room = await Room.findById(roomId);
    if(!room) throw new ApiError(400,"Room does not exist");

    const favourite = await Favourite.findOne({ user: userId, room: roomId });
    if (!favourite) {
        return res.status(200).json(new ApiResponse(200, "Room does not exist in favorites"));
    }
    const user = await User.findByIdAndUpdate(userId, { $pull: { favourites: favourite._id }},{new: true});

    await Favourite.findByIdAndDelete(favourite._id)

    return res.status(200).json(
        new ApiResponse(200, null, "Favourite removed successfully")
    )
})

