const User = require('../models/user');

module.exports = {
    addUser: function (req, res, next) {
        console.log(req.body);
        const newUser = new User({
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
        });
        if(newUser.role==="chef"||newUser.role==="admin"){
            newUser.authorized = "true";
            newUser.save()
                .then(user => {
                    res.locals.user = user;
                    next();
                });
            console.log( newUser.role +' CREATED' );
        }
        else if (newUser.role==="user"){
            newUser.authorized = "false";
            newUser.save()
                .then(user => {
                    res.locals.user = user;
                    next();
                });
            console.log( newUser.type +' CREATED' );
        }
        else{
            console.log("USER NOT CREATED")
        }
    }

};
