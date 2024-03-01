const express = require("express");
const tourRouter = express.Router();
const {isLoggedIn, isLoggedOUt,isAdmin} = require("../middlewares/auth");
const {uploadProductImage} = require("../middlewares/uploadefile");
const upload = require("../middlewares/uploadefile");
const {validateUserRegistration, validateUserPasswordUpdate, validateUserForgetPassword, validateUserResetPassword} = require("../validators/auth");
const runValidation = require("../validators");

const {
    handleCreateTour,
    handleGetTours,
    handleGetTour,
    handleUpdateTour,
    handleDeleteTour
} = require('../controllers/tourController');
const { validateTour } = require("../validators/tour");


//POST api/categories

tourRouter.post(
        '/',
        uploadProductImage.single('image'),
        validateTour,
        runValidation,
        isLoggedIn,
        isAdmin,
        handleCreateTour
        );

//GET api/categories
tourRouter.get(
        '/',
        handleGetTours
        );

//GET api/categories/single
tourRouter.get(
        '/:slug',
        handleGetTour
        );

//PUT api/categories/single-update
tourRouter.put(
        '/:slug',
        uploadProductImage.single('image'),
        validateTour,
        runValidation,
        isLoggedIn,
        isAdmin,
        handleUpdateTour
        );

//Delte api/categories/:slug
tourRouter.delete(
        '/:slug',
        isLoggedIn,
        isAdmin,
        handleDeleteTour
        );

module.exports = tourRouter;