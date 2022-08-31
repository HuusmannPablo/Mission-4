import React, { useState } from "react";
import stringReplacer from "../../Utils/StringReplacer";

export const TextField: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const preventFormSub = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const getUserMSG = (e: React.FocusEvent<HTMLInputElement>): void => {
    setMessage(e.currentTarget.value);
  };

  const setUserMSG = () => {
    const newString = stringReplacer(message);
    setShowMessage(true);
    setNewMessage(newString);
  };

  return (
    <div className="TF-form-main-container">
      <h1>Turners Home</h1>
      <form
        onSubmit={(e) => {
          preventFormSub(e);
        }}
      >
        <input type="text" name="text" onChange={getUserMSG} />
        <input type="submit" value="Replace" onClick={setUserMSG} />
      </form>
      <div>{showMessage && <h1>{newMessage}</h1>}</div>
    </div>
  );
};
