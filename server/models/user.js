const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    email: {
        type: String, unique: true
    },
    authorized: Boolean,
    role: { type: String, enum: ['admin', 'user','chef'] },
    password: String
});

userSchema.pre("save", function(next) { let user = this;
    bcrypt.hash(user.password, 10).then(hash => { user.password = hash; next();
    });
});

userSchema.methods.passwordComparison = function(inputPassword) { let user = this;
    return bcrypt.compare(inputPassword, user.password);
};

module.exports = mongoose.model("User", userSchema);