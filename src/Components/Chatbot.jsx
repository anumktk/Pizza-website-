import React from "react";

const Chatbot = () => {
  return (
    <div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="PizzaAgent"
        agent-id="f27abe6d-f96c-448b-a9c3-6ae6f7be6192"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Chatbot;
