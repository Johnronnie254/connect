import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ serviceProviders }) => {
  return (
    <div>
      <h2>Service Providers</h2>
      <div>
        {serviceProviders.map((provider) => (
          <ServiceCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
