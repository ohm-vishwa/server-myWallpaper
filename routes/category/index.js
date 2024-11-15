const express = require("express");
const { addCategory, getAllCategory, deleteCategory } = require("./routes");
const router = express.Router();

router.post("/", addCategory);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
