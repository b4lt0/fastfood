const menuItem = require('../models/menuItem');

module.exports = {
    addMenuItem: function (req,res,next) {
        const newMenuItem = new menuItem({
           name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            type : req.body.type,
        });
        if (price>0) {
            newMenuItem.save()
                .then(menuItem => {
                    res.locals.menuItem = menuItem;
                    next();
                });
        }
        console.log(newMenuItem.name + ' ADDED')
    }
};