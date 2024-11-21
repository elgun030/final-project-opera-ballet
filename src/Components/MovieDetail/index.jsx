import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const { eventId } = useParams();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      setMessage("User is not authenticated");
      return;
    }

    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/movie/${eventId}`
        );
        const eventDetails = response.data;

        setSeats(eventDetails.availableSeats);
        console.log("Event details fetched successfully:", eventDetails);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setMessage("Failed to fetch event details.");
      }
    };

    fetchEventDetails();
  }, [eventId, userId]);

  const toggleSeatSelection = (seatNumber) => {
    const maxSeats = 5; // Kullanıcının seçebileceği maksimum koltuk sayısı

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < maxSeats) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      setMessage(`You can only book up to ${maxSeats} seats at a time.`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedSeats.length === 0) {
      setMessage("Please select at least one seat.");
      return;
    }

    const bookingData = {
      userId,
      eventId,
      seatNumbers: selectedSeats,
      quantity,
    };

    console.log("Booking data submitted:", bookingData);

    try {
      const response = await axios.post(
        "http://localhost:8000/booking/book",
        bookingData
      );
      console.log("Booking successful:", response.data);
      setMessage(
        `Successfully booked: ${response.data.successfullyBooked.join(", ")}`
      );
      setSelectedSeats([]); // Seçimleri temizle
      setQuantity(1); // Miktarı sıfırla
    } catch (error) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
        setMessage(error.response.data.message);
      } else {
        console.error("Error occurred during the request:", error);
        setMessage("An error occurred while booking the seats.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Book Seats</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {seats.map((seat) => (
          <button
            key={seat.seatNumber}
            onClick={() =>
              !seat.isBooked && toggleSeatSelection(seat.seatNumber)
            }
            className={`p-2 rounded-lg ${
              seat.isBooked
                ? "bg-red-400 cursor-not-allowed"
                : selectedSeats.includes(seat.seatNumber)
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            disabled={seat.isBooked}>
            {seat.seatNumber}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="w-full p-2 border text-black border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Book Seats
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-lg text-red-500">{message}</p>
      )}
    </div>
  );
};

export default MovieDetail;
