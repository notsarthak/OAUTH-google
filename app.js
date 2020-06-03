const express = require('express');
const authRoutes=require('./routes/auth-routes');
const passportSetup=require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app=express();

//setting up view engine
app.set('view engine','ejs');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('connected to the MONGODB')
})

//setting up auth routes
app.use('/auth',authRoutes);

//homepage route
app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,()=>{
    console.log('Listening to Port 3000')
})