const { Router } = require('express');
const { User } = require('../db.js')
const passport = require('passport');
// const Passport = require('../passport.js')
require('../passport.js')
const router = Router();


// router.get('/',
//   function (req, res) {
//     res.send(`<h1>Login</h1>
//     <a href="/login">Ingresar</a>`);
//   });

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('El usuario no existe');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('Autenticación exitosa');
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get('/logout',
function (req, res) {
  req.logout();
  res.redirect('/login');
});

router.get('/profile', (req, res) => {
  res.send(req.user); 
});


// router.post('/ingresaste',
//   function (req, res) {
//     res.send(`<h1>Ingresaste a wines!!</h1>
//     <p>Home wines</p>
//     <a href="/logout">Logout</a>`);
//   });

// router.post('/login',
// passport.authenticate('local', {failureRedirect: '/login'}),
// function(req, res){
//   res.redirect('/')
// });

// router.get('/login',
//   function(req, res){
//     res.send(`<h1>Ingrese su usuario</h1>
//     <form action="/login" method="post">
//       <label for="username">Username:</label>
//       <input type="text" name="username" placeholder="Username">
//       <label for="password">Password:</label>
//       <input type="password" name="password" placeholder="Password">
//       <input type="submit">
//     </form>`)
//     res.redirect('/ingresaste');
//   });


// router.post('/login',
//   function(req, res) {
//     res.redirect('/');
//   });


  // function isAuthenticated(req, res, next) {
  //   if(req.isAuthenticated()) {
  //     next();
  //   } else {
  //     res.redirect('/login');
  //   }
  // }
  
  // router.get('/profile',
  //   isAuthenticated,
  //   function(req, res){
  //     res.render('profile', { User: req.User });
  //   });
  
module.exports = router