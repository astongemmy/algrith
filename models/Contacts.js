const mongoose = require('mongoose');

const Contacts = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your full name'],
        maxlength: [150, 'Name cannot be more than 150 characters']
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        maxlength: [40, 'Email cannot be more than 200 characters']
    },
    phone: {
        type: Number,
        required: [true, 'Please add your phone number'],
        maxlength: [11, 'Phone number cannot be more than 11 digits']
    },
    location: {
        type: String,
        required: [true, 'Please add your location'],
        maxlength: [40, 'Location cannot be more than 40 characters']
    },
    message: {
        type: String,
        required: [true, 'Please enter your message'],
        maxlength: [250, 'Message cannot be more than 250 characters']
    }
})

module.exports = mongoose.models.Contacts || mongoose.model('Contacts', Contacts);