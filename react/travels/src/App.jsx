import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "./deepcomponents/RegisterForm";
import LoginForm from "./deepcomponents/LoginForm";
import BusList from "./deepcomponents/BusList";
import BusSeats from "./deepcomponents/BusSeats";
import UserBooking from "./deepcomponents/UserBooking";
import Wrapper from "./deepcomponents/Wrapper";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const [selectedBusId, setSelectedBusId] = useState(null); //Newly added state

  const handleLogin = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    setToken(token);
    setUserId(userId);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken(null);
    setUserId(null);
    setSelectedBusId(null);
  };

  return (
    <div>
      {/* <Wrapper handleLogout = {handleLogout} token={token}>
      <Routes>
        <Route path='/' element={<BusList />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm onLogin = {handleLogin}/>} />
        <Route path='/login' element={<LoginForm onLogin = {handleLogin}/>} />
        <Route path='/bus/:busId' element={<BusSeats token={token}/>} />
        <Route path='/my-bookings' element={<UserBookings token={token} userId={userId}/>} />
      </Routes>
      </Wrapper> */}
      <Wrapper token={token} handleLogout={handleLogout}>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/"
            element={
              <BusList
                onSelectBus={(id) => setSelectedBusId(id)}
                token={token}
              />
            }
          />
          <Route path="/bus/:busId" element={<BusSeats token={token} />} />
          <Route
            path="/my-bookings"
            element={<UserBooking token={token} userId={userId} />}
          />
        </Routes>
      </Wrapper>
    </div>
  );
};

export default App;
