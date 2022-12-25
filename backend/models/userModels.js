import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please enter your name']
    },
    email : {
        type : String,
        required : [true, 'Please enter an email'],
        unique : true
    },
    phoneNumber : {
        type :Number,
        required : [true, 'Please enter phone number']
    },
    address : {
        type : String,
        required : [true, 'Please enter your address']
    }
}, {timestamps : true});

const User = mongoose.model('User', UserSchema)

export default User