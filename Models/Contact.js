const {Schema, model} = require('mongoose');


const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength:2,
        maxlength:14
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minLength: 9,
        maxlength: 15
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
});

const Contact = model('Contact', contactSchema)

module.exports = Contact