import User from "../models/userSchema.js";
import { queries } from "../helper/queries/userQuery.js";
import dbConnection from "../config/MySQLdbconnection.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import generateToken from "../utils/generateJwtToken.js";
import matchPassWord from "../utils/matchPassword.js";
dotenv.config();

const conn = dbConnection();
// @ Desc registering new user
// @ Route /api/registeruser
// @ Type Public & POST
const registerUser = async (req, res) => {
  const data = req.body;

  const {
    firstName,
    middleName,
    lastName,
    userName,
    userEmail,
    password,
    userPhoneNumber,
  } = data;

  try {
    const salt = await bcryptjs.genSaltSync(10);
    const hashPassword = await bcryptjs.hashSync(password, salt);

    conn.query(
      await queries.registerUserSqlQuery(
        firstName,
        middleName,
        lastName,
        userName,
        userEmail,
        hashPassword,
        userPhoneNumber
      ),
      (error, resp) => {
        if (error) {
          console.log(error, "Error...........");
          res.status(400).json(error.sqlMessage);
        } else {
          generateToken(res, userEmail);

          res.status(200).json(resp);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// @ Desc registering new user
// @ Route /api/getuser/:id
// @ Type Public & GET
const getUser = (req, res) => {
  const id = req.params.id;
  let token;
  token = req.cookies.jwt;

  try {
    conn.query(queries.getuserSqlQuery(id), (error, resp) => {
      if (resp) {
        let jwtSecretKey = process.env.SECRET_KEY;
        const decode = jwt.verify(token, jwtSecretKey);
        res.status(200).json({ message: "Authorized User ", data: decode });

        // res.status(200).json({ message: "User found", data: token });
      } else {
        res.status(404).json({ message: "User not found", error: error });
      }
    });
  } catch (error) {
    res.status(400).json({ message: "quey not found", data: error });
  }
};

// @ Desc registering new user
// @ Route /api/getusers
// @ Type Public & GET
const getAllUser = (req, resp) => {
  try {
    conn.query(queries.getAllusersSqlQuery(), (error, res) => {
      if (error) {
        console.log(error, "Error...........");
        const response = {
          status: 400,
          error: error,
          message: "Somthing went wrong",
          data: null,
        };
        resp.status(400).json(response);
      } else {
        const response = {
          status: 200,
          message: "Request made successfully",
          data: res,
        };

        return resp.status(200).json(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// @ Desc logining  user
// @ Route /api/loginuser
// @ Type Public & POST
const loginUser = async (req, res) => {
  const { password, userEmail } = req.body;

  const token = req.cookies.jwt;
  var savedPassword;
  let passsss;

  try {
    conn.query(queries.fecthPassword(userEmail), async (error, resp) => {
      if (error) {
        res.status(404).json("Server side db error");
      }
      if (resp) {
        if (resp.length > 0) {
          passsss = resp;
          savedPassword = passsss[0].password;
          const staTus = await matchPassWord(password, savedPassword);

          if (staTus) {
            conn.query(
              queries.getuserByEmailSqlQuery(userEmail),
              (err, ress) => {
                if (ress) {
                  generateToken(res, userEmail);
                  res.status(200).json({
                    message: "User logged in successfully",
                    status: 200,
                    token: token,
                    data: ress,
                  });
                } else {
                  res
                    .status(404)
                    .json({ error: err, message: "Unable to fetch user data" });
                }
              }
            );

            // generateToken(res, userEmail);
            // res.status(200).json({
            //   message: "User logged in successfully",
            //   status: 200,
            //   token: token,
            //   data: data,
            // });
          } else {
            res.status(404).json({ message: "Invalid password " });
          }
        } else {
          res.status(404).json({ message: "Invalid credentils " });
        }
      }
    });
  } catch (error) {
    const data = {
      error: error,
      message: " Syntex error ",
      data: null,
    };
    res.status(404).json(data);
  }
};

// @ Desc logout  user
// @ Route /api/logoutuser
// @ Type Public & POST
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", { expires: new Date(0), httpOnly: true });
  res.status(200).json({ message: "User loged out" });
};

// @ Desc updating  user
// @ Route /api/updateuser/:id
// @ Type Private & PUT
const updateUser = (req, resp) => {
  const id = req.params.id;
  const data = req.body;

  const { userName, userEmail, userPhoneNumber } = data;

  try {
    conn.query(
      queries.updateUserSqlQuery(userName, userEmail, userPhoneNumber, id),
      (error, res) => {
        if (error) {
          console.log(error, "Error...........");
          resp.status(400).json(error);
        } else {
          // console.log(res);
          return resp.status(200).json(res);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// @ Desc deleting  user
// @ Route /api/deleteuser/:id
// @ Type Private & DELETE
const deleteUser = async (req, resp) => {
  //  0/1 = select count(*) from myuser where id= ${id}

  const id = req.params.id;
  try {
    conn.query(queries.deleteUserSqlQuery(id), (error, res) => {
      if (error) {
        console.log(error, "Error...........");
        resp.status(400).json(error);
      } else {
        return resp.status(200).json(res);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// @ Desc deleting all user
// @ Route /api/deleteusers
// @ Type Private & DELETE
const deleteAllUser = async (req, resp) => {
  try {
    conn.query(queries.deleteAllUserSqlQuery(), (error, res) => {
      if (error) {
        console.log(error, "Error...........");
        resp.status(400).json(error);
      } else {
        // console.log(res);
        return resp.status(200).json(res);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  registerUser,
  getUser,
  getAllUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  deleteAllUser,
};
