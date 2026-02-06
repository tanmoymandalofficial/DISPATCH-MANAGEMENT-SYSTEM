const mongoose = require('mongoose');

const DispatchSchema = new mongoose.Schema({
    comodity : {
        type : String,
        required : [true,'comodity is requried'],
        trim : true,
        maxLenth : 4
    },
    companey : {
        type : String,
        required : [true,'Companey name is requried'],
        trim : true
    },
    from : {
        type : String,
        required : [true,'from stn is requried'],
        trim : true
    },
    to : {
        type : String,
        required : [true,'destination stn is requried'],
        trim : true
    },
    lodingDate : {
        type : Date,
        // required : [true,'loding date is requried'],
        trim : true,
        default : Date.now()
    },
    status : {
        type : String,
        required : [true,'loding date is requried'],
        trim : true,
        default : 'new' 
    },
    isActive : {type: Boolean, default: true}
},{timestamps : true});

module.exports = mongoose.model('dispatch', DispatchSchema);