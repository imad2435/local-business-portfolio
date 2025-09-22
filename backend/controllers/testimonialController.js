// local-business-portfolio/backend/controllers/testimonialController.js

const Testimonial = require("../models/testimonialModel.js");

const getTestimonial = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

const createTestimonial = async (req, res) => {
  try {
    // FIX: Match model property 'avatarUrl'
    const { name, review, avatarUrl } = req.body;

    if (!name || !review || !avatarUrl) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const newTestimonial = new Testimonial({
      name,
      review,
      avatarUrl,
    });

    const createdTestimonial = await newTestimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const updateTestimonial = async (req, res) => {
  try {
    // FIX: Match model property 'avatarUrl'
    const { name, review, avatarUrl } = req.body;
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        message: "Testimonial not found",
      });
    }

    testimonial.name = name || testimonial.name;
    testimonial.review = review || testimonial.review;
    testimonial.avatarUrl = avatarUrl || testimonial.avatarUrl;

    const updatedTestimonial = await testimonial.save();
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    // FIX: Consistent variable name
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        message: "Testimonial not found",
      });
    }

    await testimonial.deleteOne();
    // FIX: Correct response object
    res.status(200).json({
      message: "Testimonial removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};