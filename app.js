const express = require('express');
const authRoutes=require('./routes/auth-routes');

const app=express();

//setting up view engine
app.set('view engine','ejs');

//setting up auth routes
app.use('/auth',authRoutes);

//homepage route
app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,()=>{
    console.log('Listening to Port 3000')
})