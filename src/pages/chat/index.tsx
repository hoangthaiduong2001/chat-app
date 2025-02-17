import AlertDialog from '@/components/CommonAlertDialog';
import { CommonTextField } from '@/components/CommonTextField';
import { Avatar, Badge, Button, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaSearch, FaSignOutAlt } from 'react-icons/fa';

const users = [
  {
    id: 1,
    name: 'Albert Flores',
    isOnline: true,
    lastMessage: "Hi, I'm confirming your check-in...",
    time: '10:37',
  },
  {
    id: 2,
    name: 'Annette Black',
    isOnline: true,
    lastMessage: "I'm arriving tomorrow afternoon...",
    time: '9:15',
    unread: 1,
  },
  {
    id: 3,
    name: 'Edwin Johnson',
    isOnline: true,
    lastMessage: 'Cool! Is there a coffee machine...',
    time: '9:01',
  },
  {
    id: 4,
    name: 'Edwin Johnson',
    isOnline: true,
    lastMessage: 'Cool! Is there a coffee machine...',
    time: '9:01',
  },
  {
    id: 5,
    name: 'Ldwin Johnson',
    isOnline: true,
    lastMessage: 'Cool! Is there a coffee machine...',
    time: '9:01',
  },
  {
    id: 6,
    name: 'Ndwin Johnson',
    isOnline: true,
    lastMessage: 'Cool! Is there a coffee machine...',
    time: '9:01',
  },
  {
    id: 7,
    name: 'Idwin Johnson',
    isOnline: true,
    lastMessage: 'Cool! Is there a coffee machine...',
    time: '9:01',
  },
  {
    id: 8,
    name: 'Ddwin Johnson',
    isOnline: true,
    lastMessage: 'Cool! Is there a coffee machine...',
    time: '9:01',
  },
  {
    id: 9,
    name: 'Bdwin Johnson',
    isOnline: true,
    lastMessage: 'Cool! Is there a coffee machine...',
    time: '9:01',
  },
];

const messages = [
  {
    sender: 'Edwin Johnson',
    text: "Hi! I'm interested in the apartment listing I saw online...",
    time: '8:35',
  },
  { sender: 'You', text: "Hi there! Yes, it's available on those dates...", time: '8:51' },
  { sender: 'Edwin Johnson', text: "We're looking for a place with a nice view...", time: '8:54' },
  {
    sender: 'You',
    text: 'Great! The apartment has a small balcony...',
    time: '8:57',
  },
  { sender: 'Edwin Johnson', text: 'Cool! Is there a coffee machine or kettle?', time: '9:01' },
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
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [newMessage, setNewMessage] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);
  const handleLogout = () => {};

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (selectedUser) {
      scrollToBottom();
    }
  }, [selectedUser, newMessage]);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Messages List */}
      <div className="w-1/4 bg-white p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <TextField
          placeholder="Search"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: <FaSearch className="text-gray-400 mr-2" />,
          }}
        />
        <div className="flex flex-col justify-between h-[90%] gap-10">
          <div className="mt-4 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 max-h-[80vh]">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedUser(user);
                  scrollToBottom();
                }}
              >
                <Badge
                  color="success"
                  overlap="circular"
                  badgeContent=""
                  variant={user.isOnline ? 'dot' : 'standard'}
                >
                  <Avatar>{user.name.charAt(0)}</Avatar>
                </Badge>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{user.name}</h4>
                  <p className="text-xs text-gray-500 truncate w-40">{user.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-400">{user.time}</span>
              </div>
            ))}
          </div>
          <Button
            className="w-full"
            variant="contained"
            color="secondary"
            startIcon={<FaSignOutAlt />}
            onClick={handleLogout}
          >
            <AlertDialog
              label="Logout"
              title="Are you want logout"
              onSubmit={() => console.log('123')}
            />
          </Button>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-white p-4 pb-0 flex flex-col">
        {selectedUser ? (
          <>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-3">
                <Avatar>{selectedUser.name.charAt(0)}</Avatar>
                <div>
                  <h4 className="text-sm font-semibold">{selectedUser.name}</h4>
                  <p className="text-xs text-gray-500">
                    {selectedUser.isOnline ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {messages.map((msg, idx) => (
                <div
                  ref={messageEndRef}
                  key={idx}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.sender === 'You' ? 'bg-purple-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-xs block text-right mt-1 text-gray-500">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Message Input */}
            <div className="flex items-center justify-center gap-3 p-2 border-t">
              <CommonTextField
                placeholder="Your message"
                value={newMessage}
                // onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button
                className="h-full w-10"
                variant="text"
                color="primary"
                disabled={!newMessage.trim()}
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
