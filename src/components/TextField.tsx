import React, { useState } from "react";
import stringReplacer from "../Utils/StringReplacer";

export const TextField: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleChange = (e: React.FocusEvent<HTMLInputElement>): void => {
    setMessage(e.currentTarget.value);
  };

  const handleClick = () => {
    const newString = stringReplacer(message);
    setShowMessage(true);
    setNewMessage(newString);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <input type="text" name="text" onChange={handleChange} />
        <input type="submit" value="Replacer" onClick={handleClick} />
      </form>
      <div>{showMessage && <h1>{newMessage}</h1>}</div>
    </div>
  );
};
