import { JsonBot, JsonMessage } from './interfaces';

export class BotMessage {
  public message: string;
  public timestamp: Date | null;

  public constructor(json_bot_message: JsonMessage) {
    this.message = json_bot_message.message;//.replace(/\n/g, '<br/>');
    this.timestamp = !!json_bot_message.timestamp ? new Date(json_bot_message.timestamp) : null;
  }
}

export class BotMessageBundle {
  public received: BotMessage[];
  public sent: BotMessage[];
  public error: BotMessage[];
  public botLog: BotMessage[];

  constructor(json_bot_message: JsonBot) {
    this.received = json_bot_message.received.map((x) => new BotMessage(x));
    this.sent = json_bot_message.sent.map((x) => new BotMessage(x));
    this.error = json_bot_message.commandError ? [new BotMessage({ message: json_bot_message.commandError, timestamp: null })] : [];
    this.botLog = json_bot_message.botLog ? [new BotMessage({ message: json_bot_message.botLog, timestamp: null })] : [];
  }
}
