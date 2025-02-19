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
