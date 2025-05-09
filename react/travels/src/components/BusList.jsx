import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BusList = () => {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios("http://localhost:8000/api/buses/");
        setBuses(response.data);
      } catch (error) {
        console.log("Error in fetching buses", error);
      }
    };
    fetchBuses();
  }, []);

  const handleViewSeats = (id) => {
    navigate(`/bus/${id}/`);
  };
  return (
    <div>
      {buses.map((item) => {
        return (
          <div key={item.key}>
            <div>Bus Name:{item.bus_name}</div>
            <div>Number:{item.number}</div>
            <div>Origin:{item.origin}</div>
            <div>Destination:{item.destination}</div>
            <div>Start Time:{item.start_time}</div>
            <div>Reach Time:{item.reach_time}</div>
            <button onClick={() => handleViewSeats(item.id)}>View Seats</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default BusList;
