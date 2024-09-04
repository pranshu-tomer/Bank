import mongoose from 'mongoose'

const accountSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    accountNumber : {
        type : String,
        minLength : [12, "Wrong Account Number"],
        maxLength : [12, "Wrong Account Number"],
        required : true
    },
    ifscCode : {
        type : String,
        minLength : [10, "Wrong IFSC Code"],
        maxLength : [10, "Wrong IFSC Code"],
        required : true
    }
})

export const Account = mongoose.model("Account",accountSchema)