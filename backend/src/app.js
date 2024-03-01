var cors = require('cors')
const express = require("express");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const createError = require('http-errors');
const xssclen = require('xss-clean');
const rateLimit = require('express-rate-limit');



const rateLimiter = rateLimit({
    windowMs:1*60*1000,//1 minute
    max:5,
    message:'Too many requests from this IP. please try again later'
})

app.use(cors());
// ratelimiter
app.use(rateLimiter);
//middleware
app.use(xssclen());
app.use(morgan('dev'));
//build in
// app.use(express.json())
//thard party
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));

// cookie parser
app.use(cookieParser());

//import router
const userRouter = require('./routers/userRouter');
const seedRouter = require('./routers/seedRouter');
const authRouter = require("./routers/authRouter");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");
const tourRouter = require("./routers/tourRouter");
const { errorResponse } = require("./controllers/responseController");

// Router Add
app.use("/api/v1/users",userRouter);
app.use("/api/v1/seed",seedRouter);
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/categories",categoryRouter);
app.use("/api/v1/products",productRouter);
app.use("/api/v1/tours",tourRouter);


app.get('/test',rateLimiter,(req,res)=>{
    try{
        res.status(200).send({
            message:"api testing is working",
        });
    }catch(error){
        res.status(500).send(message.error);
    }
})



// error handling

//client error handling
app.use((req,res,next)=>{
    // res.status(404).json({message:'route not found'});
    next(createError(404, 'route not found'));
});

//server error handling -> all the errros
app.use((err,req,res,next)=>{
    // console.error(err.stack);
    // res.status(404).json({message:'route not found'});
    // return res.status(err.status || 500).json({
    //     success:false,
    //     message:err.message
    // });
    return errorResponse(res,{
        statusCode:err.status,
        message:err.message
    })
});



















// const isLoggedIn =(req,res,next)=>{
//     // console.log('isLoggedIn.middleware');
//     const login = true;
//     if(login){
//         req.body.id = 101;
//         next();
//     }else{
//         return res.status(401).json({message:'please login'});
//     }
//     // next();
// }

// app.use(isLoggedIn);
module.exports = app;
