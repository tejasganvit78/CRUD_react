// Form.js
import React, { useState } from "react";

const Form = ({ addData, links }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addData(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data"
      />


      <button type="submit">Add</button>
      <link rel="icon" href=<input /> />
    </form>
  );
};

export default Form;
