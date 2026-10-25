import mongoose, { model } from "mongoose";

const categorySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    },

    image: {
        type: String,
    },

    description: {
        type: String,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

}, {
    timestamps: true
});

export default model("Category", categorySchema);