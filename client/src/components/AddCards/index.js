import React from "react";

function AddCards({ img }) {
    return (
        <div>
            {/* Image tag to show card image, this src url will be imported from when the user searched the card */}
            <img src={img}></img>

            {/* Add cards will add the card info into the users database fro collection */}
            <button>Add Card(s)</button>
            {/* Drop down menu for up to 6 cards */}
            {/* text box to enter custom amount >6 */}
        </div>
    );
}

export default AddCards;