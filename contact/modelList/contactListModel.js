const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    lastname:{
        type: String,
        required:[true, 'please Lastname'],
    },
    firstname:{
        type: String,
        required:[true, 'please enter Firstname']
    },
    email:{
        type: String,
        required:[true, 'please enter a valid'],
        unique: true
    },
    age:{
        type:Number,
        required:[true, 'please enter age']
    }

}, {
    timestamps: true //inbuilt value holding createdAt: Date, updatedAt: Date
})

module.exports = mongoose.model('Contact', contactSchema)