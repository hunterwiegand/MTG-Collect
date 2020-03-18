// Import axios so we can make calls to our api
import axios from "axios";

// Export these axios calls so we can use them in our app
export default {
  // axios call that allows us to use our api/mtg-card.js file and run a get command
  // To find card with the given title
  getCard: function(q) {
    console.log("name " + q)
    // return axios.get("/api/cards", { params: { name: "name:" + q } });
    return axios.get("/api/cards:", {params : {q}});
  }
};