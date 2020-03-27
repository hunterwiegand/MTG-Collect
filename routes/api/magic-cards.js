const express = require('express')
const router = express.Router()
const User = require('../../database/models/user')
const mongoose = require("mongoose")
mongoose.promise = Promise

router.post('/', (req, res) => {

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

  console.log("In card add")

  // TODO 
  // Validate if the card is already entered to avoid duplicates
  User.find({ username: req.body.username }, (err, data) => {

    let userCards = data[0].cards;
    let foundMatch = false;
    let noCards = false;
    let outcome = "";

    console.log(foundMatch);

    if (userCards.length !== 0) {
      for (let i = 0; i < userCards.length; i++) {
        if (userCards[i].name === newCard.name) {
          console.log("Found match");
          foundMatch = true;
          outcome = "Found Match"
          res.send(outcome);
        }
      }
    } else {
      console.log("no cards yet");
      let conditions = { username: req.body.username };
      let update = { $push: { cards: newCard } };
      let options = { multi: true };
      User.update(conditions, update, options, callback);
      function callback(err) {
        if (err) throw err;
      }
      noCards = true;
      outcome = "No cards yet"
      res.send(outcome);
    }
    if (!foundMatch && !noCards) {
      console.log("didn't find match");
      let conditions = { username: req.body.username };
      let update = { $push: { cards: newCard } };
      let options = { multi: true };

      User.update(conditions, update, options, callback);

      function callback(err) {
        if (err) throw err;
      }
      outcome = "No Match Found"
      res.send(outcome);
    }
  })
});

router.post("/get-cards", (req, res) => {

  // console.log("req.query", req.body.query)

  // let {
  //   color,
  //   rarity,
  //   pT,
  //   cmc
  // } = req.body.query

  User.find({ username: req.user.username })
    .then(data => {
      // console.log("data: ", data)
      let cards = data[0].cards;
      let params = req.body.query;

      // Filter out the parameters that were void
      Object.keys(params).map(function (key, index) {
        if (params[key] === null) {
          delete params[key];
        }
      });

      // console.log("cards: ", cards);
      // console.log("cards[1].colors: ", cards[1].colors);
      // console.log("params: ", params)

      let test;

      cards.forEach(element => {
        // console.log("element: ", element)
        // console.log(typeof(element))
        test = checkIfObjectContains(params, element)
      })


      function checkIfObjectContains(two, one) {
        console.log("one: ", one);
        console.log("two: ", two);
        for (var i in one) {
          if (!two.hasOwnProperty(i) || one[i] !== two[i]) {
            return false;
          }
        }
        return true;
      }

      console.log("test: ", test);
      console.log("params: ", params);
      console.log("card[0].cmc: ", cards[0].cmc)


      // function where(cards, params) {
      //   return cards.filter(function(cardProp) {
      //     return Object.keys(params).every(function(key){
      //       return cardProp.hasOwnProperty(key) && params[key] === cardProp[key];
      //     });
      //   });
      // };

      function where(collection, constraint) {
        return collection.filter(collectionItem =>
          Object.keys(constraint).every(key =>
            collectionItem.hasOwnProperty(key) && constraint[key] === collectionItem[key]));
      }



      // res.send(data[0].cards);
    });

})

module.exports = router;