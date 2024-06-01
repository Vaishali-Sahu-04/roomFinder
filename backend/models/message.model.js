import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  
const Message = mongoose.model("message",messageSchema)

export default Message;