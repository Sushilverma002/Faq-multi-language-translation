import express from "express";
import { config } from "dotenv";
import mongoConnect from "./config/database.js";
import routes from "./routes/index.js";
config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api/v1", routes);

const start = async () => {
  try {
    await mongoConnect(process);
    app.listen(PORT, () => {
      console.log(`Server is Running at ${PORT}`);
    });
  } catch (err) {
    console.log(`error in listing at ${PORT}`);
  }
};
start();
