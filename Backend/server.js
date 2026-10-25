import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectdb from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/sellers", sellerRoutes);

app.get("/", (req, res) => {
    res.send("Daraz backend is running!");
});

const startServer = async () => {
    await connectdb();
    app.listen(5001, () => {
        console.log("Server is running on port 5001");
    });
};

startServer();
