import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
import connectDB from "./config/dbConnection.js";
import dbConnection from "./config/MySQLdbconnection.js";

//for parsing body data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// cors for enabling to make access for frontend

const corsOptions = {
  origin: [
    "http://localhost:8080",
    "http://localhost:3000",
    "http://127.0.0.1",
    "http://example.com",
    // your origins here
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
app.use(cors(corsOptions));

import router from "./routes/userRoutes.js";
// connecting database
// connectDB();
// dbConnection();

// User Routes
app.use("/api", router);

// listening ports
const port = process.env.PORT || 8080 || 3300;

app.listen(port, () => {
  console.log(`app is running at the port ${port}`);
});

/*

need to fix prtect route

*/
