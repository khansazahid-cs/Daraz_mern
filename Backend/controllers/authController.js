
import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user_exist = await User.findOne({ email });

        if (user_exist) {
            return res.status(409).json({
                message: "User already exists",
            });
        }

        // Hash the password
        const hashedpassword = await bcrypt.hash(password, 10);

        // Create new user
        await User.create({
            name,
            email,
            password: hashedpassword,
        });

        return res.status(201).json({
            message: "User created successfully",
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Something went wrong. Please contact support.",
        });
    }
};



