const express = require('express')
const router = express.Router()
const Collection = require('../../database/models/collection')

router.post('/', (req, res) => {
    console.log("Collection add");

    const { 
      quantity, 
      colors,
      mana_cost,
      name,
      type_line,
      rarity,
      oracle_text,
      cmc,
      imageUrl
    } = req.body

    console.log(req.body)

    // ADD VALIDATION
    Collection.findOne({ name: name }, (err, collection) => {
        if (err) {
            console.log('Collection.js post error: ', err)
        } else if (collection) {
            res.json({
                error: `Sorry, already a card with the name: ${name}`
            })
        }
        else {
            const newCard = new Collection({
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
            newCard.save((err, savedCard) => {
                if (err) return res.json(err)
                res.json(savedCard)
            })
        }
    })
})

module.exports = router;