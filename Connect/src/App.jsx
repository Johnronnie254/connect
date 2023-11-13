import React, { useState } from "react";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
    </div>
  );
};

export default App;
