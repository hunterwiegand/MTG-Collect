const express = require('express')
const router = express.Router()
const User = require('../../database/models/user')
const Card = require("../../database/models/card")
const mongoose = require("mongoose")
mongoose.promise = Promise

router.post('/', (req, res) => {
    console.log("Card add");

    const { 
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

    console.log(req.body)

    // ADD VALIDATION
    User.findOne({ username: username }, () => {
            const newCard = new Card({
              quantity: quantity,
              colors: colors,
              mana_cost: mana_cost,
              name: name,
              type_line: type_line,
              rarity: rarity,
              oracle_text: oracle_text,
              cmc: cmc,
              imageUrl: imageUrl
            })
                User.cards.push(newCard);
        }
    )
})

module.exports = router;