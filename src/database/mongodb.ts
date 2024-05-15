import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "";
let isConnected = false;

export const connectToDB = async () => {
  if (!isConnected) {
    mongoose.set("strictQuery", true);
    try {
      await mongoose.connect(uri);
      console.log("connected to database");
    } catch (error) {
      console.log("database connection failed: ", error);
    }
  }
};
