const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');
const keys=require('./keys')
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
}))