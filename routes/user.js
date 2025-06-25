import express from "express";
import * as userHandlers from "../handlers/user-handlers.js";

const router = express.Router();

router.get("/", userHandlers.getUsers);
router.get("/:id", userHandlers.getUser);

router.post("/", userHandlers.createUser);

// update a product
router.put("/:id", userHandlers.updateUser);

// delete a product
router.delete("/:id", userHandlers.deleteUser);

export default router;
