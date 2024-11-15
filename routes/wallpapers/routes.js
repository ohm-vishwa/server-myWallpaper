const wallpapers = require("../../model/wallpapers");
const addwallpaper = async (req, res) => {
  try {
    const wallpaperData = {
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
    };
    const Wallpaper = await wallpapers.create(wallpaperData);
    res.status(200).send({
      wallpaper: Wallpaper,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const getAllWallpapers = async (req, res) => {
  try {
    const page = Number(req?.query?.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    // category filter
    let query = {};
    const category = req?.query?.category;
    if (category) {
      query.category = category;
    }

    const searchValue = req?.query?.searchValue;
    if (searchValue) {
      query.name = { $regex: new RegExp(searchValue, "i") };
    }

    const Wallpapers = await wallpapers.find(query).skip(skip).limit(limit);
    res.status(200).send({
      success: true,
      wallpapers: Wallpapers,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const deleteWallpaper = async (req, res) => {
  try {
    const id = req.params.id;
    const Wallpaper = await wallpapers.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      wallpaper: Wallpaper,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  addwallpaper,
  getAllWallpapers,
  deleteWallpaper,
};
