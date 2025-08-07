import React from "react";
import "./Booking.css";

function Booking() {
  return (
    <div className="booking-section">
      <div className="booking-container">
        <h2 className="booking-title">Book Your Dream Trip</h2>
        <p className="booking-subtitle">Fill in your details to get started</p>
        <form className="booking-form">
          <input
            type="text"
            placeholder="Full Name"
            className="booking-input"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="booking-input"
          />
          <input
            type="text"
            placeholder="Destination"
            className="booking-input"
          />
          <button type="submit" className="booking-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
