const axios = require("axios");
const db = require("../database");

module.exports = {
    findAll: function(req, res) {
        // Object deconstruction
        const { query: params } = req;
        console.log("In mtg-cards");
        // params => { name: <name to search for> }
        // https://api.magicthegathering.io/v1/cards?name=%22opt%22
        axios
          .get("https://api.magicthegathering.io/v1/cards?name", {
            params
          })
          .then(results =>
            // Filter through the results the we get back from the axios call
            // and return only the information listed below
            results.cards.filter(
              result =>
                result.name &&
                result.color &&
                result.manaCost &&
                result.subtypes &&
                result.rarity &&
                result.text &&
                result.type &&
                result.cmc &&
                result.imageUrl
            )
          )
          // If there is an error while handling the request, return the error in json format
          .catch(err => res.status(422).json(err));
      }
}