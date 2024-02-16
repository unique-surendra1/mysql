import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const matchPassWord = async (password, savedPassword) => {
  const res = await bcryptjs.compare(password, savedPassword);
  return await res;
};

export default matchPassWord;
