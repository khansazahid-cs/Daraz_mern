import mongoose, { model } from "mongoose";

const wishlistSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],

}, {
    timestamps: true
});

export default model("Wishlist", wishlistSchema);