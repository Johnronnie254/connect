// ServiceCard.js
import React from "react";

const ServiceCard = ({ provider }) => {
  const { name, phoneNumber, location, occupation, prices } = provider;

  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>Phone: {phoneNumber}</p>
      <p>Location: {location}</p>
      <p>Occupation: {occupation}</p>
      <p>Prices: {prices}</p>
    </div>
  );
};

export default ServiceCard;
