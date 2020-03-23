const express = require('express')
const router = express.Router()
const User = require('../../database/models/user')
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
    name: name,
    quantity: quantity,
    colors: colors,
    mana_cost: mana_cost,
    type_line: type_line,
    rarity: rarity,
    oracle_text: oracle_text,
    cmc: cmc,
    imageUrl: imageUrl
  });


  // TODO 
  // Validate if the card is already entered to avoid duplicates
  // User.find({ username: req.body.username }, (err, docs) => {
  //   if (docs) {

  //     console.log("docs[0].cards :", docs)

  //   } else {
  //     let conditions = { username: req.body.username };
  //     let update = { $push: { cards: newCard } };
  //     let options = { multi: true };

  //     User.update(conditions, update, options, callback);

  //     function callback(err) {
  //       if (err) throw err;
  //     }
  //   }
  // })

  // User.find()
  //   .where("cards.name.", newCard.name)
  //   .exec(function (err, card) {
  //     if (!card) {
  //       console.log("card already added");
  //       return res.json({
  //         error: "Card already Added"
  //       });
  //     } else {
  //       let conditions = { username: req.body.username };
  //       let update = { $push: { cards: newCard } };
  //       let options = { multi: true };

  //       User.update(conditions, update, options, callback);

  //       function callback(err) {
  //         if (err) throw err;
  //       }
  //     }
  //   });


  let conditions = { username: req.body.username };
  let update = { $push: { cards: newCard } };
  let options = { multi: true };


  User.update(conditions, update, options, callback);

  function callback(err) {
    if (err) throw err;
  }


  });

router.post("/get-cards", (req, res) => {
  console.log("card get route");
  console.log("req", req.user.username);

  User.find({ username: req.user.username })
    .then(data => {
      console.log(data)
      res.send(data);
    });

})

module.exports = router;