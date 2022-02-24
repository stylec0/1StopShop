const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    itemName: String,
})

module.exports = mongoose.model('Cart', cartSchema);