import React from "react";
import { Home } from "./Home/Home";
import { Signup } from "./Components/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { Bookss } from "./Books/Books";
import { useAuth } from "./Context/Authprovider";
function App() {
  const [authuser, setAuthuser] = useAuth();
  console.log(authuser);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={authuser ? <Bookss /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
