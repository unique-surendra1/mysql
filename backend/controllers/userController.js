import User from "../models/userSchema.js";
import { queries } from "../helper/queries/userQuery.js";

import dbConnection from "../config/MySQLdbconnection.js";

const conn = dbConnection();
// @ Desc registering new user
// @ Route /api/registeruser
// @ Type Public & POST
const registerUser = async (req, resp) => {
  const data = req.body;
  const {
    firstName,
    middleName,
    lastName,
    userName,
    userEmail,
    userPhoneNumber,
  } = data;

  try {
    conn.query(
      queries.registerUserSqlQuery(
        firstName,
        middleName,
        lastName,
        userName,
        userEmail,
        userPhoneNumber
      ),
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

// @ Desc registering new user
// @ Route /api/getuser/:id
// @ Type Public & GET
const getrUser = (req, resp) => {
  const id = req.params.id;

  try {
    conn.query(queries.getuserSqlQuery(id), (error, res) => {
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
const loginUser = (req, resp) => {
  const { userName, userEmail } = req.body;
  // `SELECT userEmail FROM myuser WHERE userEmail='${userEmail};'`,

  try {
    conn.query(queries.loginUser(userName, userEmail), (error, res) => {
      if (error) {
        const response = {
          status: 422,
          error: error,
          message: error.sqlMessage,
          data: res,
        };
        return resp.status(404).json(response);
      } else {
        // console.log(res, "ressssssssssssssssssssssssss");

        if (res[0] == null) {
          const response = {
            status: 404,
            message: "Invalid Credentials",
            data: res,
          };
          return resp.status(404).json(response);
        } else {
          const response = {
            status: 200,
            message: "User logged in successfully",
            data: res,
          };

          return resp.status(200).json(response);
        }
      }
    });
  } catch (error) {
    const response = {
      error: error,
      message: "Something went wrong!",
      data: null,
    };
    return resp.status(400).json(response);
  }
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
  getrUser,
  getAllUser,
  loginUser,
  updateUser,
  deleteUser,
  deleteAllUser,
};
