import mongoose, { model } from "mongoose";

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    discountPrice: {
        type: Number,
    },

    stock: {
        type: Number,
        required: true,
        default: 0,
    },

    image: {
        type: String,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    brand: {
        type: String,
    },

    rating: {
        type: Number,
        default: 0,
    },

}, {
    timestamps: true
});

export default model("Product", productSchema);