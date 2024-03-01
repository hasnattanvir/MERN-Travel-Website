const Tour = require('../models/tourModel');
const slugify = require('slugify')
const createError = require('http-errors');
const { successResponse } = require('./responseController');
const { createTour, getTours, getTour,updateTour,deleteTour } = require('../services/tourService');
const { deleteImage } = require('../helper/deleteImage');
// console.log("test");

// Register Tour
const handleCreateTour = async(req,res,next)=>{
    try{
        const image = req.file?.path;
        console.log(image);
        const tour = await createTour(req.body,image);

        return successResponse(res,{
            statusCode:201,
            message:'Tour was created successfully',
            payload: {tour}
        })
    }catch(error){
        next(error);
    }
};

// Find All Tours
const handleGetTours = async(req,res,next)=>{
    try{
        const search = req.query.search || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;
        
        const searchRegExp = new RegExp('.*'+search+".*",'i');
        const filter = {
            $or:[
                {title:{$regex:searchRegExp}},
                // {price:{$regex:searchRegExp}},
            ]
        };
        const tourData = await getTours(page,limit,filter);

        return successResponse(res,{
            statusCode:200,
            message:'Tour was fatched successfully',
            payload:{
                tours:tourData.tours,
                pagination:{
                    totalPage:Math.ceil(tourData.count/limit),
                    currentPage:page,
                    previousPage:page-1,
                    nextPage:page+1,
                    totalNumberOfTours:tourData.count,
                }
            }
        })
    }catch(error){
        next(error);
    }
};

// Find Tour Slug
const handleGetTour = async(req,res,next)=>{
    try{
        const {slug} = req.params;
        const tour = await getTour(slug);
        // console.log(tour);
        return successResponse(res,{
            statusCode:200,
            message:'Return Single Toure',
            payload:{tour}
        })
    }catch(error){
        next(error);
    }
};

// Delete Tour By Slug
const handleDeleteTour = async(req,res,next)=>{
    try{
        const {slug} = req.params;
        await deleteTour(slug);
        return successResponse(res,{
            statusCode:200,
            message:'Toure Delete success',
        })
    }catch(error){
        next(error);
    }
};

// Update Tour By Slug
const handleUpdateTour = async(req,res,next)=>{
    try{
        const {slug} = req.params;
        const updatedTours = await updateTour(slug,req);
        console.log(updatedTours);
        return successResponse(res,{
            statusCode:200,
            message:'Toure Update success',
            payload:updatedTours
        })
    }catch(error){
        next(error);
    }
};





module.exports ={
    handleCreateTour,
    handleGetTours,
    handleGetTour,
    handleDeleteTour,
    handleUpdateTour
};