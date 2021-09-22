const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../db.js')

passport.use(new LocalStrategy(
    function (email, password, done) {
        User.findOne({
            where: {
                'email': email
            }
        }).then(function (user) {
            if (user == null) {
                return done(null, false, { message: 'El usuario no existe' })
            }

            var hashedPassword = bcrypt.hashSync(password, user.salt)

            if (user.password === hashedPassword) {
                return done(null, user)
            }

            return done(null, false, { message: 'Contraseña incorrecta' })
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser(function (id, done) {
    User.findById(id).then(function (user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});

// module.exports = passport