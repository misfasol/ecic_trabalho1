import express from "express";
import { createUser, deleteUser, editUser, getUsers } from "../controllers/user.js";

const router = express.Router();
router.get("/users/get", getUsers);
router.post("/users/create", createUser);
router.delete("/users/delete", deleteUser);
router.put("/users/edit", editUser);

export default router;