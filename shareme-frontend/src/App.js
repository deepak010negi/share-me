import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
