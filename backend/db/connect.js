import mongoose from 'mongoose'

export const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("Mongodb connected"))
    } catch (error) {
        console.log("Error in connecting mongodb -> ",error.message);
        process.exit(1);
    }
}