const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'], // only for admin and user      
        default: 'user'
    },
    islogin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}); 

module.exports = mongoose.model('User' , userSchema);