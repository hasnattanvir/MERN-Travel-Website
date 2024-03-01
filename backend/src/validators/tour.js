const {body} = require("express-validator");
//registration validation
const validateTour = [
    body("title")
    .trim()
    .notEmpty()
    .withMessage("Tour Name is required")
    .isLength({min:3, max:150})
    .withMessage("Tour Name should be at least 3-150 characters long"),  

    body("desc")
    .trim()
    .notEmpty()
    .withMessage("Tour description is required")
    .isLength({min:3})
    .withMessage("Tour description should be at least 3-150 characters long"),

    body("price")
    .trim()
    .notEmpty()
    .isFloat({min:0})
    .withMessage("Price must be a positive number"),

    body("city")
    .trim()
    .notEmpty()
    .withMessage("Tour Name is required")
    .isLength({min:3, max:150})
    .withMessage("Tour Name should be at least 3-150 characters long"),  
    
    body("distance")
    .trim()
    .notEmpty()
    .isInt({min:1})
    .withMessage("Distance Must Be Positive"),

    body("address")
    .trim()
    .notEmpty()
    .withMessage("Tour Name is required")
    .isLength({min:3, max:150})
    .withMessage("Tour Name should be at least 3-150 characters long"),  
    
    body("maxGroupSize")
    .trim()
    .notEmpty()
    .isInt({min:1, max:10})
    .withMessage("Max GroupSize 10 And Min 1"),
    
    body("avgRating")
    .trim()
    .notEmpty()
    .isFloat()
    .withMessage("Avg Rating Must be positive "),

    body("featured")
    .isBoolean()
    .withMessage("Featured must be a boolean value")
    .optional() // Use optional() to allow for the default value if not provided
    .toBoolean(), // Convert to boolean if possible
];



module.exports = {
    validateTour,
};

