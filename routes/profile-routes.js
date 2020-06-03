const express=require('express');

const router=express.Router();

let authCheck=(req,res,next)=>{
    if(!req.user)
    {
        res.redirect('/auth/login');
    }
    else
    {
        next();
    }
}

router.get('/',authCheck,(req,res)=>{
    res.send('You are now logged in, this is your profile: '+req.user.username);
})

module.exports=router;