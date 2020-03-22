const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define cardSchema
const cardSchema = new Schema({

    quantity: { type: Number, unique: false, required: true},
    colors: { type: Array, unique: false, required: true},
    mana_cost: { type: String, unique: false, required: true},
    name: { type: String, unique: true, required: true},
    type_line: { type: String, unique: false, required: true},
    rarity: { type: String, unique: false, required: true},
    oracle_text: { type: String, unique: false, required: true},
    cmc: { type: Number, unique: false, required: true},
    imageUrl: { type: String, unique: false, required: true}

});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;