const Category = require("../models/Category");

// Create Category
const createCategory = async (req, res) => {
    try {

        const { name, image } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Category name is required",
            });
        }

        const exists = await Category.findOne({ name });

        if (exists) {
            return res.status(400).json({
                message: "Category already exists",
            });
        }

        const category = await Category.create({
            name,
            image,
        });

        res.status(201).json(category);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// Get All Categories
const getCategories = async (req, res) => {

    try {

        const categories = await Category.find();

        res.json(categories);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

module.exports = {
    createCategory,
    getCategories,
};