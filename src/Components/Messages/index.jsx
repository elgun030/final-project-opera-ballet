import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      setMessage("User is not authenticated");
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/booking/${userId}/bookings`
        );
        const bookings = response.data.bookings;

        const transformedMessages = bookings.map((booking) => {
          if (!booking.eventId) {
            return {
              id: booking._id,
              type: "ticket",
              content: `Booking for event is incomplete. Event details are missing.`,
            };
          }

          return {
            id: booking._id,
            type: "ticket",
            content: (
              <>
                Your ticket for the event{" "}
                <span className="font-bold text-black">
                  "{booking.eventId.name}"
                </span>{" "}
                has been{" "}
                <span className="font-bold text-green-500">
                  successfully booked
                </span>
                . Event Date:{" "}
                <span className="font-bold">
                  {new Date(booking.eventId.date).toLocaleDateString()}
                </span>
                , Price:{" "}
                <span className="font-bold">{booking.eventId.price}₼</span>,
                Seat Number:{" "}
                <span className="font-bold">{booking.seatNumber}</span>,
                Quantity: <span className="font-bold">{booking.quantity}</span>.
              </>
            ),
          };
        });

        setMessages(transformedMessages);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setMessage("Failed to fetch bookings.");
      }
    };

    fetchBookings();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${apiUrl}/booking/${userId}/bookings/${id}`
      );
      setMessages(messages.filter((message) => message.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
      setMessage("Failed to delete booking.");
    }
  };

  return (
    <div className="container max-w-[1420px] m-auto">
      <div className="p-6 bg-gradient-to-r rounded-lg shadow-lg">
        <h2 className="font-extrabold text-3xl mb-6 text-white text-center">
          Your Messages
        </h2>
        {messages.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">
            No messages to display.
          </p>
        ) : (
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                className={`mb-4 p-4 rounded-lg flex justify-between items-center transition duration-300 transform hover:scale-105 ${
                  message.type === "ticket"
                    ? "bg-blue-200 border-l-4 border-blue-500 shadow-md"
                    : "bg-green-200 border-l-4 border-green-500 shadow-md"
                }`}>
                <span className="flex-1 text-gray-800 text-lg">
                  {message.content}
                </span>
                <>
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600">
                    <svg
                      viewBox="0 0 1.625 1.625"
                      className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                      height={15}
                      width={15}>
                      <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195" />
                      <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033" />
                      <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016" />
                    </svg>
                    <svg
                      width={16}
                      fill="none"
                      viewBox="0 0 39 7"
                      className="origin-right duration-500 group-hover:rotate-90">
                      <line
                        strokeWidth={4}
                        stroke="white"
                        y2={5}
                        x2={39}
                        y1={5}
                      />
                      <line
                        strokeWidth={3}
                        stroke="white"
                        y2="1.5"
                        x2="26.0357"
                        y1="1.5"
                        x1={12}
                      />
                    </svg>
                    <svg
                      width={16}
                      fill="none"
                      viewBox="0 0 33 39"
                      className="">
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
                </>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Messages;
