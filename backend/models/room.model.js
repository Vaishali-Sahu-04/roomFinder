import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    area:{
      type: Number,
      required: true  
    },
    location: {
        type: String,
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
        enum:['1BK','1BHK','2BHK','3BHK']
    },
    available:{
        type:Boolean,
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
    },
    beds:{
        type: Number,
        required: true,
    },
    baths:{
        type: Number,
        required: true,
    },
    balcony:{
        type: Number,
        required: true,
    },
    furnished:{
        type: String,
        enum: ["Furnished","Unfurnished","Semi-furnished"],
        required: true,
    },
    constructionAge:{
        type: String,
        required: true,
    },
    electricity:{
        type: String,
        enum: ["Included","Excluded"],
        required: true,
    },
},{timestamps: true})

const Room = mongoose.model('rooms',roomSchema);

export default Room;