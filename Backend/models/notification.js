import mongoose, { model } from "mongoose";

const notificationSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enum: ["order", "payment", "promotion", "general"],
        default: "general",
    },

    isRead: {
        type: Boolean,
        default: false,
    },

}, {
    timestamps: true
});

export default model("Notification", notificationSchema);