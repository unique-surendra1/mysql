import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const protectRoutes = async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  let jwtSecretKey = process.env.SECRET_KEY;

  if (token) {
    try {
      const decode = jwt.verify(token, jwtSecretKey);
      // res.status(200).json({ message: "Authorized User ", data: decode });
      next();
    } catch (error) {
      res.status(401).json({ message: "Not Authorized and invalid token " });
    }
  } else {
    res.status(404).json({ message: "Not unuthorized and No token " });
  }
};

export default protectRoutes;
