import React from "react";

function AddCards({
    imageUrl,
    quantity,
    handleInputChangeAdd,
    handleAddSubmit
}) {
    return (
        // <div>
        //     {/* Image tag to show card image, this src url will be imported from when the user searched the card */}
        //     <img src={imageUrl}></img>

        //     {/* Add cards will add the card info into the users database fro collection */}
        //     <button>Add Card(s)</button>
        //     {/* Drop down menu for up to 6 cards */}
        //     {/* text box to enter custom amount >6 */}
        // </div>

        <form>
            <div className="form-group">

                {/* Image tag to show card image, this src url will be imported from when the user searched the card */}
                <img src={imageUrl}></img>

                <input
                    id="quantity"
                    type="number"
                    value={quantity}
                    min="0"
                    name="quantity"
                    onChange={handleInputChangeAdd}
                    required
                />
            </div>
            <div className="pull-right">
                <button
                    onClick={handleAddSubmit}
                    type="button"
                    className="btn btn-lg btn-danger float-right"
                >
                    Add Card
  </button>
            </div>
        </form>
    );
}

export default AddCards;