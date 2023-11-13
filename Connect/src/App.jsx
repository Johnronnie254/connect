import React, { useState } from "react";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [serviceProviders, setServiceProviders] = useState([
    // Your initial list of service providers goes here
  ]);

  const handleSearch = (searchTerm) => {
    // Implement search logic here and update the serviceProviders state
  };

  return (
    <div>
      <Header />
      <NavBar />
      <ServiceList serviceProviders={serviceProviders} />
    </div>
  );
};

export default App;
