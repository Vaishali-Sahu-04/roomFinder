import Room from "../models/room.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from '../utils/cloudinary.js';

export const getAllRooms = asyncHandler( async(req, res) => {
    const allRooms = await Room.find({});
    return res.status(200).json(
        new ApiResponse(200, allRooms, "Rooms fetched successfully")
    )
})

export const getRoomById = asyncHandler( async(req, res) => {
    const {roomId} = req.params;
    try {
        const room =await Room.findById(roomId)
        if(!room) throw new ApiError(400,"An error occured while fetching the room");

        return res.status(200).json(
            new ApiResponse(200, room, "Room fetched successfully")
        )
    } catch (error) {
        throw new ApiError(400,error.message);
    }
})

export const uploadRoom = asyncHandler( async (req, res) => {
    const {title,description,price,location,
        availableFor,type,available,ownerPhone,area,
        beds,baths,balcony,furnished,electricity,constructionAge} = req.body;

    if(!price||!location||!availableFor||!type||!available||
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

export const getOwnerRoom = asyncHandler( async(req ,res) => {
    const ownerId = req.user._id;
    try {
        const room =await Room.find({owner: ownerId})
        if(room.length === 0) throw new ApiError(400,"No rooms posted by the owner");

        return res.status(200).json(
            new ApiResponse(200, room, "Rooms fetched successfully")
        )
    } catch (error) {
        throw new ApiError(400,error.message);
    }
})