import User from "../models/auth.js";

export const handleSignal = (req, res) => {
  const { signal, to } = req.body;
  res.status(200).send('Signal handled');
};

export const getCurrentTime = (req, res) => {
  const now = new Date();
  res.status(200).json({ currentTime: now });
};
