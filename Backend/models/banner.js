import mongoose, { model } from "mongoose";

const bannerSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    link: {
        type: String,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    startDate: {
        type: Date,
    },

    endDate: {
        type: Date,
    },

}, {
    timestamps: true
});

export default model("Banner", bannerSchema);