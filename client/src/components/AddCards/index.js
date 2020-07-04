import React from "react";

function AddCards({
    imageUrl,
    quantity,
    handleInputChangeAdd,
    handleAddSubmit
}) {
    return (
        <form>
            <div className="form-group">

                {/* Image tag to show card image, this src url will be imported from when the user searched the card */}
                <img src={imageUrl} alt="Image of Magic Card"></img>

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
                    className="btn btn-lg btn-primary float-right"
                >
                    Add Card
  </button>
            </div>
        </form>
    );
}

export default AddCards;