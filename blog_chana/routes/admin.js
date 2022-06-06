const router = require("express").Router();
const admin = require("../controller/adminController");

router.post("/addBlog", admin.createBlog);
router.get("/allBlog", admin.getAllBlog);
router.get("/detailBlog/:id", admin.getDataById);
router.put("/edit/:id", admin.editBlog);
router.delete("/delete/:id", admin.deleteBlog);

module.exports = router;
