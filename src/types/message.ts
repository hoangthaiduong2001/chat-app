export type MessageResponse = {
  event: string;
  data: {
    id: string;
    sender: {
      id: string;
      username: string;
    };
    receiver: {
      id: string;
      username: string;
    };
    message: string;
    timestamp: number;
  };
};

export type MessageRequest = {
  receiver: {
    id: string;
    username: string;
  };
  message: string;
};

export interface IMessage {
  sender: string;
  receiver: string;
  text: string;
  time: number;
}
