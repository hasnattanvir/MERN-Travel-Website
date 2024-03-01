const { Schema, model } = require("mongoose");
const { defaultImagePath } = require("../secret");

const tourSchema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Tour",
    },
    username: {
        type: String,
        required: true,
    },
    reviewText: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0,
    },
},
{ timestamps: true }
);

const Tour = model('Tour', tourSchema);
module.exports = Tour;
