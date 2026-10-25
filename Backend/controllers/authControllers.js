import User from "../models/user.js";
import bcrypt from "bcryptjs";


// Signup User
export const signupUser = async (req, res) => {
    try {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        let user_exist = await User.findOne({
            email: email
        });

        if (user_exist) {
            return res.status(400).json({
                message: "User already existed"
            });
        }
        else {
            console.log("User not existed");
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        await User.create({
            email: email,
            name: name,
            password: hashedpassword,
        });

        res.status(200).json({
            message: "User created successfully",
        });

    }
    catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong, Please Contact support error"
        });
    }
};


// Login User
export const loginUser = async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        let user_exist = await User.findOne({
            email: email
        });

        if (!user_exist) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }

        const password_match = await bcrypt.compare(
            password,
            user_exist.password
        );

        if (!password_match) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user_exist._id,
                name: user_exist.name,
                email: user_exist.email,
            }
        });

    }
    catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong, Please Contact support error"
        });
    }
};