const mongoose = require('mongoose');

const menuItemSchema =  mongoose.Schema({
    name : {
        type : String, unique:true
    },
    price : Number,
    description : String,
    type : {
        type : String, enum: ['burger', 'chips', 'beverage']
    }
});

menuItemSchema.pre("save", function(next){
    let menuItem = this;

})

model.exports = mongose.model("MenuItem", menuItemSchema);