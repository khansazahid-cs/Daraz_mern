import mongoose, { model } from "mongoose";

const couponSchema = mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
    },

    discountType: {
        type: String,
        enum: ["percentage", "fixed"],
        required: true,
    },

    discountValue: {
        type: Number,
        required: true,
    },

    minimumAmount: {
        type: Number,
        default: 0,
    },

    expiryDate: {
        type: Date,
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

}, {
    timestamps: true
});

export default model("Coupon", couponSchema);