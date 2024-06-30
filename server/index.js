import express from "express";
import dotenv from "dotenv";
import { dbconnect } from "./db/dbconnect.js";
import cors from "cors";
import path from "path";
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
dotenv.config();
dbconnect();

const app = express();
app.use(cors());
app.use(express.json()); // Ensure the server can parse JSON
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use('/uploads',express.static(path.join('uploads')))


app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/user", userRoutes);
app.use("/video", videoRoutes);

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Your app run on http://localhost:${port}`));
