
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiResponse} from '../utils/ApiResponse.js'
import {ApiError} from '../utils/ApiError.js'
import Location from '../models/location.model.js'
import Room from '../models/room.model.js'


export const filteredLocation = asyncHandler( async(req, res) => {
    const {location} = req.query;
    if (!location) {
        throw new ApiError(400, 'Location filter is required');
    }

    const [city, district, state] = location.split(',');
    if (!city || !district || !state) {
        throw new ApiError(400, 'Invalid location filter format');
    }
    try {
        const locationFilter = {
            city: city.trim(),
            district: district.trim(),
            state: state.trim()
        };

        const matchedLocations = await Location.find(locationFilter);

        if (matchedLocations.length === 0) {
            return res.status(404).json(new ApiError(404, 'No matching locations found'));
        }

        const locationIds = matchedLocations.map(loc => loc._id);

        const rooms = await Room.find({ location: { $in: locationIds } }).populate('location');

        res.status(200).json(
            new ApiResponse(200, rooms, 'Rooms fetched successfully')
        );
    } catch (error) {
        res.status(500).json(new ApiError(500, 'Error fetching rooms'));
    }
})