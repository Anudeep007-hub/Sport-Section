import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sports",
        required: true
    },
    
    slot: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("bookings", bookingSchema);
