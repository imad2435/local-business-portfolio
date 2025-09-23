// local-business-portfolio/backend/controllers/portfolioController.js

const portfolioItemModel = require("../models/portfolioItemModel.js");

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
const getPortfolioItems = async (req, res) => {
  try {
    // FIX: Use the correct model variable name
    const items = await portfolioItemModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Create a new portfolio item
// @route   POST /api/portfolio
// @access  Private (Admin)
const createPortfolioItem = async (req, res) => {
  try {
    const { title, description, imageUrl, category } = req.body;

    if (!title || !description || !imageUrl || !category) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    // FIX: Use the correct model variable name
    const newItem = new portfolioItemModel({
      title,
      description,
      imageUrl,
      category,
    });

    const createdItem = await newItem.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Update a portfolio item
// @route   PUT /api/portfolio/:id
// @access  Private (Admin)
const updatePortfolioItem = async (req, res) => {
  try {
    const { title, description, imageUrl, category } = req.body;
    // FIX: Use the correct model variable name
    const item = await portfolioItemModel.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }

    item.title = title || item.title;
    item.description = description || item.description;
    item.imageUrl = imageUrl || item.imageUrl;
    item.category = category || item.category;

    const updatedItem = await item.save();
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Delete a portfolio item
// @route   DELETE /api/portfolio/:id
// @access  Private (Admin)
const deletePortfolioItem = async (req, res) => {
  try {
    // FIX: Use the correct model variable name
    const item = await portfolioItemModel.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }

    await item.deleteOne();
    res.status(200).json({ message: "Portfolio item removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  getPortfolioItems,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
};