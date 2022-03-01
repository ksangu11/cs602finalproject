const mongoose = require('mongoose');

//Order Schema
const OrderSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    cart: {
        type: Object, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    paymentId: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);