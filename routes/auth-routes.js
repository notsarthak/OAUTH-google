const express=require('express');
const passport=require('passport');

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
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

//callback route for google to redirect
router.get('/google/redirect',(req,res)=>{
    res.send('You have reached the redirect URI');
})

module.exports=router;