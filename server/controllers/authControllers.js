import jwt from "jsonwebtoken";
import User from "../models/auth.js";

export const auth = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      try {
        const newUser = await User.create({ email });
        const token = jwt.sign(
          { email: newUser.email, id: newUser._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(201).json({ result: newUser, token });
      } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ message: "Something went wrong while creating the user.", error: err.message });
      }
    } else {
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ result: existingUser, token });
    }
  } catch (err) {
    console.error("Error finding user:", err);
    res.status(500).json({ message: "Something went wrong while finding the user.", error: err.message });
  }
};
