import React, { useState } from "react";

export default function ContactUs() {
  const [text, setText] = useState("");

  const [emailText, setEmailText] = useState("");

  const [message, setMessage] = useState("");

  const [submitButton, setSubmitButton] = useState(false);

  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleEmail = (event) => {
    setEmailText(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    setSubmitButton(true);

  };

  
  return (
    <div className="inputs-container">
      <form>
        <h1>Contact us. </h1>
        <label>
          Name:
          <input
            type="text"
            name="text"
            value={text.value}
            required
            onChange={handleText}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="emailText"
            value={emailText.value}
            onChange={handleEmail}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            type="text"
            name="message"
            value={message.value}
            onChange={handleMessage}
          />
        </label>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
