import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Card Name</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          type="submit"
          className="btn btn-lg btn-primary float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;