import mongoose from "mongoose";
import { config } from "dotenv";
config();

const URL = process.env.DATABASE_URL;

const mongoConnect = async () => {
  try {
    mongoose.connect(URL);
    console.log("database is Connected...");
  } catch (err) {
    console.log("Error in the connecting with database", err);
  }
};

export default mongoConnect;
