import axios from "axios";
import React, { useState, useEffect } from "react";

const UserBookings = ({ token, userId }) => {
  const [bookings, setBookings] = useState([]);
  const [bookingError, setBookingError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!token || !userId) return;

      try {
        const response = await axios.get(
          `http://localhost:8000/api/user/${userId}/bookings/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        console.log("Booking data =", response.data);
        setBookings(response.data);
      } catch (error) {
        console.log("Fetching details failed", error);
        setBookingError(
          error.response?.data?.message || "Failed to fetch bookings."
        );
      }
    };

    fetchBookings();
  }, [userId, token]);

  return (
    <div>
      <h2>User Bookings</h2>

      {bookingError && <p style={{ color: "red" }}>{bookingError}</p>}

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <p>
              <strong>User:</strong> {item.user}
            </p>
            <p>
              <strong>Bus:</strong>{" "}
              {typeof item.bus === "object" ? item.bus.bus_name : item.bus}
            </p>
            <p>
              <strong>Seat:</strong>{" "}
              {typeof item.seat === "object"
                ? item.seat.seat_number
                : item.seat}
            </p>
            <p>
              <strong>Booking Time:</strong> {item.booking_time}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserBookings;
