import mongoose, { model } from "mongoose";

const sellerSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    shopName: {
        type: String,
        required: true,
    },

    shopLogo: {
        type: String,
    },

    shopDescription: {
        type: String,
    },

    phone: {
        type: String,
        required: true,
    },

    address: {
        type: String,
    },

    rating: {
        type: Number,
        default: 0,
    },

    isApproved: {
        type: Boolean,
        default: false,
    },

}, {
    timestamps: true
});

export default model("Seller", sellerSchema);