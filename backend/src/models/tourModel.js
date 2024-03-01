const { Schema, model } = require("mongoose");
const { defaultImagePath } = require("../secret");
const mongoose = require('mongoose');
const tourSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Tour name is missing'],
    trim: true,
    unique: true,
    minlength: [3, 'The length of tour name can be minimum 3 characters'],
    maxlength: [150, 'The length of tour name can be maximum 31 characters'],
  },
  slug: {
    type: String,
    required: [true, 'Tour name is missing'],
    trim: true,
    lowercase: true,
    unique: true,
  },
  desc: {
    type: String,
    required: [true, 'Tour description is required'],
    trim: true,
    minlength: [3, 'The length of tour description can be minimum 3 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Tour price is required'],
    trim: true,
    validate: {
      validator: function (v) {
        return v > 0;
      },
      message: (props) => {
        return `${props.value} is not a valid price! Price must be greater than 0`;
      },
    },
  },
  image: {
    type: String,
    default: defaultImagePath,
  },
  city: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  maxGroupSize: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  avgRating: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true }
);

const Tour = model('Tour', tourSchema);
module.exports = Tour;
