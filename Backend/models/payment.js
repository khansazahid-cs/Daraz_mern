import mongoose, { model } from "mongoose";

const paymentSchema = mongoose.Schema({

    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    paymentMethod: {
        type: String,
        enum: ["cod", "card", "jazzcash", "easypaisa"],
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ["pending", "paid", "failed", "refunded"],
        default: "pending",
    },

    transactionId: {
        type: String,
    },

}, {
    timestamps: true
});

export default model("Payment", paymentSchema);