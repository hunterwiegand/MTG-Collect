const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const collectionSchema = new Schema({

    quantity: { type: Number, unique: false, required: true},
    colors: { type: Array, unique: false, required: true},
    mana_cost: { type: String, unique: false, required: true},
    name: { type: String, unique: false, required: true},
    type_line: { type: String, unique: false, required: true},
    rarity: { type: String, unique: false, required: true},
    oracle_text: { type: String, unique: false, required: true},
    cmc: { type: Number, unique: false, required: true},
    imageUrl: { type: String, unique: false, required: true}

})

const Collection = mongoose.model('Collection', collectionSchema)
module.exports = Collection