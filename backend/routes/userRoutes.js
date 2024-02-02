import express from "express";
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getrUser,
  getAllUser,
  deleteAllUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/registeruser", registerUser);
router.get("/getuser/:id", getrUser);
router.get("/getusers", getAllUser);
router.post("/loginuser", loginUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.delete("/deleteusers", deleteAllUser);

export default router;
