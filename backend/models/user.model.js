import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    userName : {
        type: String,
        required : true,
        unique : [true,"Username should be unique"],
        lowercase : [true,"use small letters only"]
    },
    email : {
        type: String,
        required : true,
        unique : [true,"Email already exist"],
        lowercase : true
    },
    dob : {
        type : Date,
        required : true
    },
    address : {
        type : String
    },
    postalCode : {
        type : Number
    },
    password : {
        type : String,
        required : true
    }
})

export const User = mongoose.model("User",userSchema)