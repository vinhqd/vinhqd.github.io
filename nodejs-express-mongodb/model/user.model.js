var mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isLike: {
        type: Boolean,
        default: false
    },
    avt: {
        type: String,
        default: '/images/avt-default.jpg'
    }
});

let User = mongoose.model('User', userSchema);

module.exports = User;