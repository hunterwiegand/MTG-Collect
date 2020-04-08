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
      let response = [];
      // Store the parameters into an array of strings
      let arrayParams = [];

      let colorKey = false;

      console.log("cards: ", cards)
      console.log("params: ", params)
      console.log("searchedCards: ", searchedCards)
      console.log("response: ", response)
      console.log("arrayParams: ", arrayParams)
      console.log("colorKey: ", colorKey)


      // Filter out the parameters that were void
      Object.keys(params).map(function (key, index) {
        if (params[key] === null) {
          delete params[key];
        }
      });
      // Loop through our params obj
      for (const element in params) {
        // Push each key in params obj to the arrayParams[]
        arrayParams.push(element);
      };


      // populate searchedCards array with cards that meet each parameter restriction
      arrayParams.forEach(element => {
        for (i in cards) {
          let key = null;
          let value = null;



          // console.log("Element: ", element)
          // console.log("params.colors: ", params.colors)
          switch (element) {
            case "cmc":
              key = cards[i].cmc;
              value = params.cmc;
              break;
            case "name":
              key = cards[i].name;
              value = params.name
              break;
            case "colors":
              // Function to see if instance of arrays are equal
              Array.prototype.equals = function (array) {
                // if the other array is a falsy value, return
                if (!array)
                  return false;

                // compare lengths - can save a lot of time 
                if (this.length != array.length)
                  return false;

                for (var i = 0, l = this.length; i < l; i++) {
                  // Check if we have nested arrays
                  if (this[i] instanceof Array && array[i] instanceof Array) {
                    // recurse into the nested arrays
                    if (!this[i].equals(array[i]))
                      return false;
                  }
                  else if (this[i] != array[i]) {
                    // Warning - two different object instances will never be equal: {x:20} != {x:20}
                    return false;
                  }
                }
                return true;
              };
              key = cards[i].colors;
              value = params.colors;
              console.log("160*  key:", key);
              console.log(typeof key)
              console.log("160*  value:", value);
              console.log(typeof value)
              if (i <= cards.length) {
                if (key.equals(value)) {
                  key = true;
                  value = true;
                  colorKey = true;
                }
              }
              break;
            case "rarity":
              key = cards[i].rarity;
              value = params.rarity
              break;
            case "pT":
              key = cards[i].pT;
              value = params.pT
              break;
          }

          // If key is equal to value
          if (key === value) {
            // If searchedCards isn't empty
            if (searchedCards.length > 0) {
              // loop through searchedCards
              searchedCards.some(card => {
                // Check to see if the card was already added
                if (card.name != cards[i].name) {
                  // If it wasn't, add card
                  console.log("card added because no match")
                  // console.log("card: ", cards[i])
                  searchedCards.push(cards[i])
                };
                return true;
              })
            } else {
              console.log("card added because empty")
              searchedCards.push(cards[i])
            }
          }
        }
        key = null;
        value = null;
      });

      response = searchedCards;

      // Validate each card to verify it meets all parameter restrictions
      // Loop through each parameter
      arrayParams.forEach(element => {
        currentIndex = 0;
        // Loop through each card
        console.log("Current arrayParam: ", element);
        for (i in searchedCards) {
          console.log(searchedCards.length)
          let key;
          let value;

          switch (element) {
            case "cmc":
              key = searchedCards[i].cmc;
              value = params.cmc;
              break;
            case "name":
              key = searchedCards[i].name;
              value = params.name
              break;
            case "colors":
              key = searchedCards[i].colors;
              value = params.colors
              break;
            case "rarity":
              key = searchedCards[i].rarity;
              value = params.rarity
              break;
            case "pT":
              key = searchedCards[i].pT;
              value = params.pT
              break;
          };

          if (element === "colors") {
            console.log("240* KEY: ", colorKey)
            if (colorKey) {
              key = true;
              value = true;
            };
          };
          console.log(searchedCards[i].name);
          console.log("241 Key: ", key);
          console.log("Value: ", value)
          // If the key is not equal to the value
          if (key != value) {
            console.log("Not Equal");
            console.log("before splice: ", response);
            console.log("currentIndex: ", currentIndex);
            // Remove the card from the response array where there currentIndex is
            response.splice(currentIndex, 1);
            console.log("Response: ", response);
            // Set the currentIndex back to to look at the next card after removing this element
            currentIndex--;
          };
          console.log("End of loop");
          // Move the currentIndex to the right by one, so we can potentially remove the next card
          currentIndex++;
          console.log("currentIndex: ", currentIndex);
        };
      });

      colorKey = false;
      key = null;
      value = null;
      res.send(response);
    });

})

module.exports = router;