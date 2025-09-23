// local-business-portfolio/backend/models/testimonialModel.js

const mongoose = require("mongoose");

// FIX: Schema name typo
const testimonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the client name"],
      trim: true,
    },
    review: {
      type: String,
      required: [true, "please add the review text"],
    },
    // FIX: Typo in property name
    avatarUrl: {
      type: String,
      required: [true, "please add the avatar url"],
    },
  },
  {
    // FIX: Typo in option name
    timestamps: true,
  }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;