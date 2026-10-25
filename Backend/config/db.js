import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectdb;
