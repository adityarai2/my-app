import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function App() {
  return (
    <div className="App">
      <h1>Welcome to TechPlus Inc</h1>
      <p>We offer Oracle, SAP, and SOA consulting services.</p>

      <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;
