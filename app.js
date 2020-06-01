const express = require('express');

const app=express();

//setting up view engine
app.set('view engine','ejs');

//homepage route
app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,()=>{
    console.log('Listening to Port 3000')
})