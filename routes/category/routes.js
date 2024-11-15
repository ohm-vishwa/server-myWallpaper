const category = require("../../model/category");
const addCategory = async (req, res) => {
  try {
    const categoryData = {
      name: req.body.name,
      image: req.body.image,
    };
    const Category = await category.create(categoryData);
    res.status(200).send({
      category: Category,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const Category = await category.find();
    res.status(200).send({
      success: true,
      category: Category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const Category = await category.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      category: Category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  addCategory,
  getAllCategory,
  deleteCategory,
};
