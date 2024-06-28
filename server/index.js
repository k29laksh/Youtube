import express from "express";
import dotenv from "dotenv";
import { dbconnect } from "./db/dbconnect.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
dbconnect();

const app = express();
app.use(cors());
app.use(express.json()); // Ensure the server can parse JSON
app.use(express.urlencoded({ extended: true, limit: "50kb" }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/user", userRoutes);

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Your app run on http://localhost:${port}`));
