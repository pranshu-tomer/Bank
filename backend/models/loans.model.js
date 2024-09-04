import mongoose from 'mongoose'

const loanSchema = mongoose.Schema({
    loanAmount : {
        type : Number,
        required : true
    },
    leftAmount : {
        type : Number,
        required : true
    },
    intrestRate : {
        type : Number,
        required : true
    },
    intallment : {
        type : Number,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    account : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Account"
    }
})

export const Loan = mongoose.model("Loan",loanSchema)