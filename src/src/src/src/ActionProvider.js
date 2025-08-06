class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleServices = () => {
    const msg = this.createChatBotMessage(
      "We offer Oracle, SAP, and SOA consulting services."
    );
    this.updateChatbotState(msg);
  };

  handleContact = () => {
    const msg = this.createChatBotMessage(
      "You can contact us at contact@techplus.com"
    );
    this.updateChatbotState(msg);
  };

  handleHelp = () => {
    const msg = this.createChatBotMessage(
      "Ask me about our services, contact info, or any help you need!"
    );
    this.updateChatbotState(msg);
  };

  handleDefault = () => {
    const msg = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. Try asking about our services or contact details."
    );
    this.updateChatbotState(msg);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
