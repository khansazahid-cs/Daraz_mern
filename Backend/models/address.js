import mongoose, { model } from "mongoose";

const addressSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    area: {
        type: String,
    },

    postalCode: {
        type: String,
    },

    isDefault: {
        type: Boolean,
        default: false,
    },

}, {
    timestamps: true
});

export default model("Address", addressSchema);