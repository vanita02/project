const express = require("express");
const {
  getAllBlogsController,
  createBlog,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} = require("../controllers/blogControlller");

const router = express.Router();

router.get("/all-blog", getAllBlogsController);

router.post("/add-blog", createBlog);

router.put("/update-blog/:id", updateBlogController);

router.get("/get-blog/:id", getBlogByIdController);

router.delete("/delete-blog/:id", deleteBlogController);

router.get("/user-blog/:id", userBlogControlller);

module.exports = router;
