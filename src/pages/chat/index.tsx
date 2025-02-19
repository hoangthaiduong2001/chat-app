import { useGetUserOnline } from '@/apis/hooks/useGetOnlineUser';
import { useLogoutMutation } from '@/apis/hooks/useLogout';
import AlertDialog from '@/components/CommonAlertDialog';
import { CommonTextField } from '@/components/CommonTextField';
import { socket } from '@/config/socket';
import { clearDataToSessionStorage, getUser } from '@/config/storage';
import { paths } from '@/routes/path';
import { LoginResType, LogoutBodyType } from '@/types/auth';
import { MessageRequest, MessageResponse } from '@/types/message';
import { convertTimestamp, showToast } from '@/utils';

import { Avatar, Badge, Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const messages = [
  {
    sender: 'Edwin Johnson',
    text: "Hi! I'm interested in the apartment listing I saw online...",
    time: '8:35',
  },
  {
    sender: 'You',
    text: "Hi there! Yes, it's available on those dates...",
    time: '8:51',
  },
  {
    sender: 'Edwin Johnson',
    text: "We're looking for a place with a nice view...",
    time: '8:54',
  },
  {
    sender: 'You',
    text: 'Great! The apartment has a small balcony...',
    time: '8:57',
  },
  {
    sender: 'Edwin Johnson',
    text: 'Cool! Is there a coffee machine or kettle?',
    time: '9:01',
  },
  {
    sender: 'You',
    text: 'test',
    time: '8:57',
  },
  {
    sender: 'You',
    text: 'test222',
    time: '8:57',
  },
];

export default function ChatPage() {
  const userOnline = useGetUserOnline();

  const [selectedUser, setSelectedUser] = useState<LoginResType | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<
    { sender: string; receiver: string; text: string; time: number }[]
  >([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [notice, setNotice] = useState<boolean>(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const user = getUser();
  const { mutate: logoutMutation } = useLogoutMutation();

  const filteredUsers = userOnline.data
    ?.filter((item) => item.username !== user?.username)
    .filter((user) => {
      return user.username.toLowerCase().includes(search.toLowerCase());
    });
  const handleLogout = (value: LogoutBodyType) => {
    socket.emit('user:disconnect');
    clearDataToSessionStorage();
    navigate(paths.login);
    showToast('Logout success', 'success');
  };

  const sendMessage = () => {
    if (input.trim() === '') return;
    const payloadData: MessageRequest = {
      message: input,
      receiver: {
        id: selectedUser?.id || '',
        username: selectedUser?.username || '',
      },
    };
    socket.emit('message:send', payloadData);
    setInput('');
    // setMessages([...messages, { sender: 'You', text: input }]);
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'instant' });
  };

  useEffect(() => {
    socket.connect();
    socket.on('usersOnline', () => {
      userOnline.refetch();
    });
    socket.on('message:receive', (data: MessageResponse) => {
      const message = data.data;
      setMessages((prev) => [
        ...prev,
        {
          sender: message.sender.username,
          receiver: message.receiver.username,
          text: message.message,
          time: message.timestamp,
        },
      ]);
    });
    return () => {
      socket.off('message:receive');
    };
  }, []);

  useEffect(() => {
    if (selectedUser) {
      scrollToBottom();
    }
  }, [selectedUser]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-4 flex flex-col rounded-2xl m-1">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <CommonTextField
          placeholder="Search"
          sx={{ height: 10 }}
          value={search}
          onChange={setSearch}
          InputProps={{
            startAdornment: <FaSearch className="text-gray-400 mr-2" />,
          }}
        />
        <div className="flex flex-col justify-between h-[90%] gap-2">
          <div className="mt-4 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 max-h-[80vh]">
            {filteredUsers && filteredUsers?.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedUser(user);
                    scrollToBottom();
                  }}
                >
                  {user.online ? (
                    <Badge overlap="circular" variant="dot" color="success">
                      <Avatar>{user.username.charAt(0)}</Avatar>
                    </Badge>
                  ) : (
                    <Avatar>{user.username.charAt(0)}</Avatar>
                  )}

                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">{user.username}</h4>
                  </div>
                  <Badge color="error" variant="dot" />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm mt-2">No users found</p>
            )}
          </div>

          <div className=" border-t-[1px] pt-3">
            <AlertDialog
              label="Logout"
              title="Are you want logout"
              onSubmit={() => handleLogout({ userId: user?.id || '' })}
              setValue={setOpen}
              value={open}
            />
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-[#F1F7FC] p-4 m-1 pb-0 flex flex-col rounded-2xl">
        {selectedUser ? (
          <>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-3">
                <Avatar>{selectedUser.username.charAt(0)}</Avatar>

                <div>
                  <h4 className="text-sm font-semibold">
                    {selectedUser.username}
                  </h4>

                  <p className="text-xs text-gray-500">
                    {selectedUser.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hidden p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {messages
                .filter(
                  (msg) =>
                    (msg.sender === user?.username &&
                      msg.receiver === selectedUser?.username) ||
                    (msg.sender === selectedUser?.username &&
                      msg.receiver === user?.username)
                )
                .map((people, idx) => (
                  <div
                    ref={messageEndRef}
                    key={idx}
                    className={`flex ${
                      people.sender === user?.username
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg overflow-y-hidden  ${
                        people.sender === user?.username
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      <p>{people.text}</p>
                      <span className="text-xs block text-right mt-1 text-gray-500">
                        {convertTimestamp(people.time)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            {/* Message Input */}

            <div className="flex items-center justify-center gap-3 p-2 border-t">
              <CommonTextField
                sx={{ borderRadius: 10, margin: 0 }}
                placeholder="Your message"
                value={input}
                onChange={setInput}
              />
              <Button
                className="h-full w-10"
                variant="text"
                color="primary"
                disabled={!input.trim()}
                onClick={sendMessage}
              >
                <FaPaperPlane />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <FaPaperPlane className="mr-2" /> Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
}
