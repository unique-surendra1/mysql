import express from "express";
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  logoutUser,
  getUser,
  getAllUser,
  deleteAllUser,
} from "../controllers/userController.js";
import protectRoutes from "../utils/protectRoutes.js";

const router = express.Router();

router.post("/registeruser", registerUser);
router.post("/loginuser", loginUser);
router.post("/logoutuser", logoutUser);
router.get("/getuser/:id", protectRoutes, getUser);
router.get("/getusers", getAllUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.delete("/deleteusers", deleteAllUser);

export default router;
