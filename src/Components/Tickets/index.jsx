import React, { useEffect, useState } from 'react';
import "./ticket.css";

const Tickets = () => {
  const [tickets, setTickets] = useState([]); // Tüm biletleri saklamak için state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:8000/tickets'); // API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTickets(data); // Tüm biletleri alıyoruz
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Tarih formatlama fonksiyonu
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options).replace(',', '').replace(' ', '-');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container max-w-[1420px] m-auto"> {/* Container div'i eklendi */}
      <div className="tickets-container"> {/* Tüm biletleri sarmalayan bir div */}
        {tickets.map((ticket, index) => (
          <div className="ticket" key={index}> {/* Her bilet için bir div */}
            <div className="stub">
              <div className="top">
                <span className="admit">Admit</span>
                <span className="line"></span>
                <span className="num">
                  Invitation
                  <span>{ticket.seat}</span> 
                </span>
              </div>
              <div className="number">{index + 1}</div>
              <div className="invite">Invite for {ticket.name}</div> 
            </div>
            <div className="check">
              <div className="big">
                You're <br /> Invited
              </div>
              <div className="number">#{index + 1}</div>
              <div className="info">
                <section>
                  <div className="title">Date</div>
                  <div>{formatDate(ticket.date)}</div> {/* Date bilgisi burada */}
                </section>
                <section>
                  <div className="title">Location</div>
                  <div>{ticket.location}</div> {/* Location bilgisi burada */}
                </section>
                <section>
                  <div className="title">Time</div>
                  <div>{ticket.time}</div> {/* Time bilgisi burada */}
                </section>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets; 
