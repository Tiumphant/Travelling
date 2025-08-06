import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "International Tours",
    icon: "🌍",
    description:
      "Explore top global destinations with expert-planned itineraries.",
  },
  {
    title: "Domestic Travel",
    icon: "🛣️",
    description:
      "Discover the beauty of your own country with our curated trips.",
  },
  {
    title: "Adventure Packages",
    icon: "⛰️",
    description:
      "Hiking, rafting, biking, and more thrilling adventures await.",
  },
  {
    title: "Family Holidays",
    icon: "👨‍👩‍👧‍👦",
    description: "Fun-filled vacations for all ages with comfort and safety.",
  },
  {
    title: "Honeymoon Specials",
    icon: "💑",
    description: "Romantic getaways to create everlasting memories.",
  },
  {
    title: "Custom Packages",
    icon: "🧳",
    description: "Fully personalized tours based on your interests and needs.",
  },
];

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="services-container">
      <div className="animated-bg"></div>

      <h1 className="services-title" data-aos="zoom-in">
        Our Services
      </h1>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
