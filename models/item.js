const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    itemName: { type: String },
    price: { type: Number },
    description: { type: String },
})

module.exports = mongoose.model('Item', itemSchema);