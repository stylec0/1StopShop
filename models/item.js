const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    itemName: { type: String },
    price: { type: Number },
    description: { type: String },
})

module.exports = mongoose.model('Item', itemSchema);

//const Item = mongoose.model('Item', itemSchema);
//module.exports.Item = Item;
//module.exports.default = Item;