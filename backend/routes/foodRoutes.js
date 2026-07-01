const express = require("express");

const router = express.Router();

const {
  addFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

// Add Food
router.post("/", addFood);

// Get All Foods
router.get("/", getAllFoods);

// Get Single Food
router.get("/:id", getFoodById);

// Update Food
router.put("/:id", updateFood);

// Delete Food
router.delete("/:id", deleteFood);

module.exports = router;