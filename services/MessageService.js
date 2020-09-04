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
    return {data: this.messages};
  }

  async create (data) {
    const message = {
      id: this.messages.length,
      from: data.from,
      to: data.to,
      message: data.message
    }

    this.messages.push(message);

    return message;
  }
}

module.exports = MessageService;