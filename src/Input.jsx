import React from "react";

export default function Input(props) {
  return (
    <form onSubmit={props.addItem}>
      <label htmlFor="input">Add Todo</label>
      <div class="form">
        <input
          type="text"
          onChange={props.handleChange}
          value={props.newItem}
          id="input"
        />
        <button>Add</button>
      </div>
    </form>
  );
}
