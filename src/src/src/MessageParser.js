class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("services")) {
      this.actionProvider.handleServices();
    } else if (lower.includes("contact")) {
      this.actionProvider.handleContact();
    } else if (lower.includes("help")) {
      this.actionProvider.handleHelp();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
