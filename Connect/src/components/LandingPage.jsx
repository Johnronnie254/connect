import React from "react";
import ServiceContainer from "./ServicesContainer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div class="containerstyle">
      <h1>Welcome to Connect</h1>
      <p>
        New in an area? Worry not. We make it easy for you to connect with all
        the service providers in your neighborhood
      </p>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          ServiceContainer;
        }}
      >
        Get Our Services
      </button>
    </div>
  );
};

export default LandingPage;
