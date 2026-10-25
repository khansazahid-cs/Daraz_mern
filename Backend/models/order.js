import mongoose, { model } from "mongoose";

const orderSchema = mongoose.Schema({

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

        price: {
            type: Number,
            required: true,
        },
    }],

    totalAmount: {
        type: Number,
        required: true,
    },

    paymentMethod: {
        type: String,
        enum: ["cod", "card", "jazzcash", "easypaisa"],
        default: "cod",
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending",
    },

    orderStatus: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
        default: "pending",
    },

}, {
    timestamps: true
});

export default model("Order", orderSchema);