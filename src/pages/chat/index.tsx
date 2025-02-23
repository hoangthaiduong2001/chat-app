import { useGetUserOnline } from '@/apis/hooks/useGetOnlineUser';
import AlertDialog from '@/components/CommonAlertDialog';
import { CommonTextField } from '@/components/CommonTextField';
import { socket } from '@/config/socket';
import {
  clearDataSessionStorage,
  getIdSocket,
  getMessages,
  getUser,
  getUserSelected,
  setIdSocketToSessionStorage,
  setMessagesToSessionStorage,
  setUserSelectedToSessionStorage,
} from '@/config/storage';
import { paths } from '@/routes/path';
import { LoginResType } from '@/types/auth';
import { IMessage, MessageRequest, MessageResponse } from '@/types/message';
import { convertTimestamp, showToast } from '@/utils';

import { Avatar, Badge, Button } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FaPaperPlane, FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { IoReorderThree } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<LoginResType | null>(
    getUserSelected() ? JSON.parse(getUserSelected() as string) : null
  );
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>(
    getMessages() ? JSON.parse(getMessages() as string) : []
  );
  const [input, setInput] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [notice, setNotice] = useState<Record<string, boolean>>({});
  const messageEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const user = getUser();
  const userOnline = useGetUserOnline();

  const filteredUsers = useMemo(() => {
    return userOnline.data
      ?.filter((item) => item.username !== user?.username)
      .filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      );
  }, [userOnline.data, user?.username, search]);

  const handleLogout = () => {
    socket.emit('user:disconnect');
    clearDataSessionStorage();
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
  };

  const scrollToBottom = (isSmooth: boolean) => {
    messageEndRef.current?.scrollIntoView({
      behavior: isSmooth ? 'smooth' : 'instant',
    });
  };

  const handleEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  useEffect(() => {
    socket.on('connect', () => {
      setIdSocketToSessionStorage(socket.id as string);
    });
  }, []);

  useEffect(() => {
    const handleUsersOnline = () => {
      userOnline.refetch();
    };
    const handleMessageReceive = ({ data: message }: MessageResponse) => {
      setMessages((prev) => [
        ...prev,
        {
          sender: message.sender.username,
          receiver: message.receiver.username,
          text: message.message,
          time: message.timestamp,
        },
      ]);
      if (selectedUser?.id !== message.sender.id) {
        setNotice((prev) => ({
          ...prev,
          [message.sender.id]: true,
        }));
      }
      if (selectedUser?.id === message.receiver.id) {
        setNotice((prev) => ({
          ...prev,
          [message.sender.id]: false,
        }));
      }
    };

    socket.connect();
    socket.on('usersOnline', handleUsersOnline);
    socket.on('message:receive', handleMessageReceive);
    setMessagesToSessionStorage(messages);
    scrollToBottom(true);
    return () => {
      socket.off('message:receive');
    };
  }, [messages]);

  useEffect(() => {
    const oldSocketId = getIdSocket();
    socket.emit('user:reconnect', oldSocketId);
  }, [socket.id]);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      <div
        className={`bg-white p-4 m-0 flex flex-col rounded-2xl transition-all duration-300 
        ${
          showSidebar
            ? 'absolute w-full md:w-full h-full z-50'
            : 'w-1/4 hidden sm:flex'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold ">Messages</h2>
          {showSidebar && (
            <IoMdClose size={24} onClick={() => setShowSidebar(false)} />
          )}
        </div>
        <CommonTextField
          placeholder="Search"
          value={search}
          onChange={setSearch}
          startAdornmentChildren={<FaSearch className="text-gray-400" />}
        />
        <div className="flex flex-col justify-between h-[90%] gap-2">
          <div className="mt-4 space-y-4 overflow-y-auto max-h-[80vh]">
            {filteredUsers && filteredUsers?.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setUserSelectedToSessionStorage(user);
                    setSelectedUser(user);
                    setShowSidebar(false);
                    scrollToBottom(false);
                    setNotice((prev) => ({
                      ...prev,
                      [user.id]: false,
                    }));
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
                  {notice[user.id] && <Badge color="error" variant="dot" />}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm mt-2">No users found</p>
            )}
          </div>
          <div className="border-t pt-3">
            <AlertDialog
              label="Logout"
              title="Are you want logout"
              onSubmit={handleLogout}
              setValue={setOpen}
              value={open}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#F1F7FC] p-4 pb-3 flex flex-col rounded-2xl">
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
              <div className="sm:hidden">
                <IoReorderThree
                  size={24}
                  onClick={() => setShowSidebar(!showSidebar)}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hidden p-4 space-y-4">
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
                      className={`max-w-xs p-3 rounded-lg overflow-y-hidden ${
                        people.sender === user?.username
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      <p className="break-words">{people.text}</p>
                      <span className="text-[0.65rem] block text-right mt-1">
                        {convertTimestamp(people.time)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-center gap-3 pt-3 border-t">
              <CommonTextField
                sx={{ borderRadius: 10, margin: 0 }}
                placeholder="Your message"
                value={input}
                onChange={setInput}
                onKeyDown={handleEnter}
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
