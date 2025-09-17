const portfolioItemModel = require("../models/portfolioItemModel.js") ;

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
const getPortfolioItems = async (req, res) => {
  try {
    const items = await PortfolioItems.find({}).sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Create a new portfolio item
// @route   POST /api/portfolio
// @access  Private (Admin)
const createPortfolioItem = async (req, res) => {
  try {
    // FIX A: Changed "request" to "req"
    const { title, description, imageUrl, category } = req.body;

    if (!title || !description || !imageUrl || !category) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newItem = new PortfolioItems({
      title,
      description,
      imageUrl,
      // Note: I've corrected the spelling to 'category' here to match the model
      // If your model uses "catagory", keep it as "catagory"
      category,
    });

    // FIX B: Added the save command and the success response
    const createdItem = await newItem.save();
    res.status(201).json(createdItem);

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update a portfolio item
// @route   PUT /api/portfolio/:id
// @access  Private (Admin)
const updatePortfolioItem = async (req, res) => {
  try {
    const { title, description, imageUrl, category } = req.body;
    const item = await PortfolioItems.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    item.title = title || item.title;
    item.description = description || item.description;
    item.imageUrl = imageUrl || item.imageUrl;
    item.category = category || item.category;

    const updatedItem = await item.save();
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Delete a portfolio item
// @route   DELETE /api/portfolio/:id
// @access  Private (Admin)
const deletePortfolioItem = async (req, res) => {
  try {
    // FIX C: Used the correct model variable "PortfolioItems"
    const item = await PortfolioItems.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    await item.deleteOne();
    res.status(200).json({ message: 'Portfolio item removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getPortfolioItems,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
};