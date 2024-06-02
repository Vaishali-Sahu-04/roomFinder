import Room from "../models/room.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from '../utils/cloudinary.js';

export const getAllRooms = (req, res) => {
    res.send("Hey rooms")
}

export const uploadRoom = asyncHandler( async (req, res) => {
    const {title,description,price,location,
        availableFor,type,available,ownerPhone,area,
        beds,baths,balcony,furnished,electricity,constructionAge} = req.body;

    if(!title||!description||!price||!location||!availableFor||!type||!available||
        !ownerPhone||!area||!beds||!baths||!balcony||!furnished||!electricity||!constructionAge)
    throw new ApiError(400, "All fields are required")


    let images = [];
    if (req.files && req.files.length > 0) {
        // Upload images to Cloudinary
        const uploadPromises = req.files.map(async file => {
            const result = await uploadOnCloudinary(file.path);
 
            if (result) {
                images.push(result.secure_url); // Store the Cloudinary URL of the uploaded image
            }
        });

        await Promise.all(uploadPromises); // Wait for all uploads to finish
    }
    // if (req.files && req.files.length > 0) {
    //     images = req.files.map(file => file.path);
    //   }

    const newRoom = await Room.create({
        title,description,price,location,availableFor,type,available,
        owner:req.user._id,
        ownerPhone,area,images,beds,baths,balcony,furnished,electricity,constructionAge
    })
    await newRoom.save();

    return res.status(200).json(
        new ApiResponse(200,{newRoom},"Room uploaded successfully")
    )
})