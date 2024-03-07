import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (res, email) => {
  let token;
  let jwtSecretKey = process.env.SECRET_KEY;
  token = jwt.sign({ email }, jwtSecretKey, { expiresIn: "1d" });
  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
