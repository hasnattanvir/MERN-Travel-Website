const slugify = require('slugify')
const Tour = require('../models/tourModel');
const createError = require('http-errors');
const { deleteImage } = require('../helper/deleteImage');

// Register Tour
const createTour = async(tourData,image)=>{
    // console.log(tourData);
    // console.log(image);
    if(!image){
        throw createError(400,'Image file is required');
    }
    if(image.size > 1024 * 1024 *2){
        throw createError(400,'File too large.It must be less then 2 MB');
    } 
    if(image){
        tourData.image = image;
        // console.log(image);
    }
    const tourExists = await Tour.exists({title:tourData.title});
    if(tourExists){
        throw createError(409,'tour with this title already exits')
    }
    //tour create
    const tour = await Tour.create({
        title:tourData.title,
        slug:slugify(tourData.title),
        desc:tourData.desc,
        price:tourData.price,
        image:tourData.image,
        city:tourData.city,
        distance:tourData.distance,
        address:tourData.address,
        maxGroupSize:tourData.maxGroupSize,
        reviews:tourData.reviews,
        avgRating:tourData.avgRating,
        featured:tourData.featured
    })

    return tour;
};


// Get Tours
const getTours = async(page=1,limit=4, filter={})=>{
    const tours = await Tour.find(filter)
        // .populate('category')
        .skip((page-1)*limit)
        .limit(limit)
        .sort({createdAt:-1});
        if(!tours){
            throw createError(404,'no tours found');
        }
    const count = await Tour.find(filter).countDocuments();
    return {tours,count};
};


// Get Tour
const getTour = async(slug)=>{
    const tour = await Tour.findOne({slug}).populate('category');
    if(!tour){
        throw createError(404,'No tours Found');
    }
    return tour;
};

// update tour
const updateTour = async(slug,req)=>{
    
    try {
        const tour = await Tour.findOne({slug:slug});
        // console.log(Tour);
        if(!tour){
            throw createError(404,'tour Not Found');
        }
        const updateOptions = {new:true, runValidators:true, context:'query'};
        
        let updates = {};
        const allowedFields = ['name','description','price','sold','quantity','shipping'];
        
        for(const key in req.body){
            if(allowedFields.includes(key)){
                if(key === 'name'){
                    updates.slug=slugify(req.body[key]);
                }
                updates[key] = req.body[key];
            }
        }
        // console.log(updates);
        const image = req.file?.path;
        // console.log(image);
        if(image){
            if(image.size>1024 * 1024 *2){
                throw new Error(400,'File too large.It must be less then 2 MB');
            }
            // updates.image = image.buffer.toString('base64');
            updates.image = image;
            tour.image !== 'default.png' && deleteImage (tour.image);
        }
        const updatedTour = await Tour.findOneAndUpdate(
            { slug },
            updates,
            updateOptions
        );
        if(!updatedTour){
            throw createError(404,'Updateing Tour was not possible');
        }
        return updatedTour;
       
    } catch (error) {
        throw error;
    }
};

// Delete Tour
const deleteTour = async(slug)=>{
    const tour = await Tour.findOneAndDelete({slug});
    if(!tour){
        throw createError(404,'No tours Found');
    }
    if(tour.image){
        await deleteImage(tour.image);
    }
    return tour;
};

module.exports ={
    createTour,
    getTours,
    getTour,
    updateTour,
    deleteTour
};