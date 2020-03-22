const express = require('express')
const router = express.Router()
const User = require('../../database/models/user')
const cardSchema = require("../../database/models/card")
const mongoose = require("mongoose")
mongoose.promise = Promise

router.post('/', (req, res) => {
    console.log("Card add");

    let { 
      quantity, 
      colors,
      mana_cost,
      name,
      type_line,
      rarity,
      oracle_text,
      cmc,
      imageUrl,
      username
    } = req.body


    let newCard = ({
        quantity: quantity,
        colors: colors,
        mana_cost: mana_cost,
        name: name,
        type_line: type_line,
        rarity: rarity,
        oracle_text: oracle_text,
        cmc: cmc,
        imageUrl: imageUrl
      });

    let conditions = { username: req.body.username };
    let update =  { $push: { cards: newCard } } ;
    let options = { multi: true };

    User.update(conditions, update, options, callback);

    function callback (err) {
        if (err) throw err;
    }
});

module.exports = router;