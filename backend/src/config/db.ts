import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
    try {
        await mongoose.connect(config.databaseUrl as string);
        console.log("Successfully Connected to Database!");
    } catch (error) {
        console.log("Failed to connect to Database", error);
        process.exit(1);
    }
}

export default connectDB;