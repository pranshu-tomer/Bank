import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    account : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Account"
    },
    cardNumber : {
        type : String,
        required : true
    },
    cardHolder : {
        type : String,
        required : true
    },
    validity : {
        type : String,
        required : true
    }
})

export const Card = mongoose.model("Card",cardSchema)