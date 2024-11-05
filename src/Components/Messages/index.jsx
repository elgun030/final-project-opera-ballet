import React, { useState } from 'react';

const initialMessagesData = [
  { id: 1, type: 'ticket', content: 'Ticket successfully purchased for the event on 12th November.' },
  { id: 2, type: 'product', content: 'Product successfully added to your cart.' },
  { id: 3, type: 'ticket', content: 'Reminder: Your event starts at 7 PM tomorrow.' },
  { id: 4, type: 'product', content: 'Your order for "Opera Glasses" has been shipped.' },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessagesData);

  const handleDelete = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
  <div className='container max-w-[1420px] m-auto'>
      <div className="p-6 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-lg shadow-lg">
      <h2 className="font-extrabold text-3xl mb-6 text-gray-900 text-center">Your Messages</h2>
      {messages.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">No messages to display.</p>
      ) : (
        <ul>
          {messages.map(message => (
            <li
              key={message.id}
              className={`mb-4 p-4 rounded-lg flex justify-between items-center transition duration-300 transform hover:scale-105 ${
                message.type === 'ticket' ? 'bg-blue-200 border-l-4 border-blue-500 shadow-md' : 'bg-green-200 border-l-4 border-green-500 shadow-md'
              }`}
            >
              <span className="flex-1 text-gray-800 text-lg">{message.content}</span>
              <button
                onClick={() => handleDelete(message.id)}
                className="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600 transition duration-200"
              >
                <svg
                  viewBox="0 0 1.625 1.625"
                  className="absolute -top-7 fill-current text-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                  height={15}
                  width={15}
                >
                  <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195" />
                  <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033" />
                  <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016" />
                </svg>
                <svg
                  width={16}
                  fill="none"
                  viewBox="0 0 39 7"
                  className="origin-right duration-500 group-hover:rotate-90"
                >
                  <line strokeWidth={4} stroke="white" y2={5} x2={39} y1={5} />
                  <line
                    strokeWidth={3}
                    stroke="white"
                    y2="1.5"
                    x2="26.0357"
                    y1="1.5"
                    x1={12}
                  />
                </svg>
                <svg width={16} fill="none" viewBox="0 0 33 39">
                  <mask fill="white" id="path-1-inside-1_8_19">
                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
                  </mask>
                  <path
                    mask="url(#path-1-inside-1_8_19)"
                    fill="white"
                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                  />
                  <path strokeWidth={4} stroke="white" d="M12 6L12 29" />
                  <path strokeWidth={4} stroke="white" d="M21 6V29" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
  );
};

export default Messages; 
