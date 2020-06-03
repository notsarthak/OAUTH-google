const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');
const keys=require('./keys')
const User=require('../models/user-model');
//const dotenv=require('dotenv');

/*dotenv.config({
    path:'./.env'
});*/

/*passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET
}),()=>{

})*/

passport.use(new GoogleStrategy({
    //options for strategy
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
    console.log('passport callback function fired')
    console.log(profile); 
    const user=new User({
        googleId:profile.id,
        username:profile.displayName
    })
    user.save().then((newUser)=>{
        console.log('new user saved: '+newUser);
    })
}))