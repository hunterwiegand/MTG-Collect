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

  // DB call to find user's cards
  User.find({ username: req.user.username })
    .then(data => {
      // Store user cards array in cards
      let cards = data[0].cards;
      // store parameters from post hit
      let params = req.body.query;
      // store the returned cards from db call into an array
      let searchedCards = [];

      let str = "cmc: 8";

      let test = str.replace(/:.*$/, "");

      // console.log("test: ", test);
      // console.log("length: ", test.length);

      // Filter out the parameters that were void
      Object.keys(params).map(function (key, index) {
        if (params[key] === null) {
          delete params[key];
        }
      });

      let arrayParams = [];
      // Loop through our params obj
      for (const element in params) {
        // Push each key in params obj to the arrayParams[]
        arrayParams.push(element);
      };

      // console.log(arrayParams);


      arrayParams.forEach(element => {
        // console.log("element: ", element)
        for (i in cards) {
          // console.log("element: ", element);
          // console.log("cards[i].element", cards[i] + "." + element)
          // console.log("cards[i].cmc", cards[i].cmc)
          // console.log("?: ", cards[i].element)

          // name: null,
          // colors: null,
          // rarity: "common",
          // pT: null,
          // cmc: .8

          let key;

          switch(element){
            case "cmc":
              key = cards[i].cmc;
              break;
            case "name":
              key = cards[i].name;
              break;
            case "colors":
              key = cards[i].colors;
              break;
            case "rarity":
              key = cards[i].rarity;
              break;
            case "pT":
              key = cards[i].pT;
              break;
          }
          console.log("key: ", key)
          // If more than one parameter grab array.length to find num of elemenets
          // for each element search cards, if cardFound === true, move on to next parameter
          // if all parameters return isFound, add card to searchedCards
          if (key === "uncommon") {
            console.log("in if loop");
            searchedCards.push(cards[i])
          }
        }
      })
      // for (i in cards) {
      //   if (cards[i].cmc === 8) {
      //     // console.log("card", cards[i])
      //     // console.log("We made it")
      //     searchedCards.push(cards[i]);
      //   };
      // };


      // console.log("searchedCards: ", searchedCards)
      res.send(searchedCards);
    });

})

module.exports = router;