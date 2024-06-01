import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required:true,
    },
    
},{timestamps: true})

const Favourite = mongoose.model('favourites',favouriteSchema);

export default Favourite;