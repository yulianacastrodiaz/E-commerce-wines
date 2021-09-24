const { Router} = require('express');
const session = require('express-session');
const passport = require('passport');
const  User  = require('../db')
require('../auth/google');
const cors = require('cors');



const router = Router();
router.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)



router.get('/google',
passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


router.get('/google/callback', 
passport.authenticate('google', { failureRedirect: '/auth/google/failure', successRedirect: '/profile', }),
function(req, res) {
  res.redirect('/auth');
});

router.get('/logout', (req, res) => {
  // req.logout();
  // req.session.destroy();
  res.send('/auth');
});
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(404);
}
router.get('/profile', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user}`);
});



module.exports = router;

