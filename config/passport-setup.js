const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    clientID:'274057902758-2ubp2bk3u8dgfqm2fjja0hbtkqa3c0nh.apps.googleusercontent.com',
    clientSecret:'QIR0mdnEP1maHx54kqMLnqvn'
}),()=>{

})