import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema({
    transactionId : {
        type : Number,
        required : true
    },
    deposit : {
        type : Boolean,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    account : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Account"
    }
})

export const Transaction = mongoose.model("Transaction",transactionSchema)