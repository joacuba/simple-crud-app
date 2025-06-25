import express from "express";
import * as postHandlers from "../handlers/post-handlers.js";

const router = express.Router();

router.get("/", postHandlers.getPosts);
router.get("/:id", postHandlers.getPost);

router.post("/", postHandlers.createPost);

// update a product
router.put("/:id", postHandlers.updatePost);

// delete a product
router.delete("/:id", postHandlers.deletePost);

export default router;
