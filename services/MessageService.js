class MessageService {
  constructor() {
    this.messages = [
      {
        from: "Emi",
        to: "Napo",
        message: "Skere"
      }
    ];
  }

  async find () {
    // Just return all our messages
    return this.messages;
  }

  async create (data) {
    // The new message is the data merged with a unique identifier
    // using the messages length since it changes whenever we add one
    const message = {
      id: this.messages.length,
      from: data.from,
      to: data.to,
      message: data.message
    }

    // Add new message to the list
    this.messages.push(message);

    return message;
  }
}

module.exports = MessageService;