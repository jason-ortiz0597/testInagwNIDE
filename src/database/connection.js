import mongoose from "mongoose";
import { config } from "dotenv";

config();

export async function connectDB() {
    try {
        await mongoose.connect(process.env.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error);
    }
}


