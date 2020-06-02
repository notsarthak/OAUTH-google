const express=require('express');

const router=express.Router();

//auth login
router.get('/login',(req,res)=>{
    res.render('login')
})

//auth logout
router.get('/logout',(req,res)=>{
    res.send('logging out');
    //handle with passport.js
})

//auth login with google
router.get('/google',(req,res)=>{
    //handle with passport.js
    res.send('logging in with google');
})

module.exports=router;