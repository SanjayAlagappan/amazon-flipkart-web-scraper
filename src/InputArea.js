import React from "react";


function InputArea({ onSubmit }) {
  return (
    <form className="input-area" onSubmit={onSubmit}>
      <input type="text" name="message" />
      <button type="submit">Send</button>
    </form>
  );
}

export default InputArea;
