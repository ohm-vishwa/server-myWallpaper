const express = require("express");
const { addwallpaper, getAllWallpapers, deleteWallpaper } = require("./routes");
const router = express.Router();

router.post("/", addwallpaper);
router.get("/", getAllWallpapers);
router.delete("/:id", deleteWallpaper);

module.exports = router;
