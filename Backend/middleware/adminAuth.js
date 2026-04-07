import jwt from "jsonwebtoken";
import User from "../models/User.js";

const adminAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("DECODED 👉", decoded);
    const user = await User.findById(decoded.id);
    console.log("USER ADMIN 👉", user?.isAdmin);

    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Admin access denied" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default adminAuth;

