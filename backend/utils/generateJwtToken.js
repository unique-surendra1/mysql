import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const generateTken = (res, email) => {
  let token;
  let jwtSecretKey = process.env.SECRET_KEY;
  token = jwt.sign({ email }, jwtSecretKey, { expiresIn: "1d" });
  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: "development",
    maxAge: 1 * 60 * 60 * 1000,
  });
};

export default generateTken;
