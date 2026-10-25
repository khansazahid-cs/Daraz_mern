import mongoose, { model } from "mongoose";

const cartSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    }],

}, {
    timestamps: true
});

export default model("Cart", cartSchema);