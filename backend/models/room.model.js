import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true,
    },
    images:[{
        type:String,
    }],
    availableFor:{
        type:String,
        enum:["Girls", "Boys", "Families","anyone"]
    },
    type:{
        type:String,
        enum:['1BK','1BHK','2BHK','3BHK','Studio']
    },
    available:{
        type:String,
        default:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    ownerPhone:{
        type: Number,
        required: true
    }
},{timestamps: true})

const Room = mongoose.model('rooms',roomSchema);

export default Room;