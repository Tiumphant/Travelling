import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import image1 from "../asset/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand (1).jpg";
import image2 from "../asset/travel-concept-with-worldwide-landmarks.jpg";
import image3 from "../asset/traveling-concept-with-landmarks.jpg";
import image4 from "../asset/couple-vacation-taking-selfie.jpg";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <section className="text-center mb-5" data-aos="fade-down">
        <h1 className="display-5 fw-bold text-primary">
          Explore the World with Us
        </h1>
        <p className="lead text-muted">
          Discover breathtaking destinations, unique experiences, and
          unforgettable memories.
        </p>
        <Link to="/booking">
          <button className="btn btn-success px-4 py-2 mt-3">Book Now</button>
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="text-center mb-3">Why Choose Us?</h2>
        <p className="text-center text-muted">
          We are committed to providing the best travel experiences with
          personalized packages, 24/7 customer support, and trusted travel
          guides. Whether you're seeking adventure, relaxation, or cultural
          immersion, we've got the perfect trip for you.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4" data-aos="fade-right">
            <div className="p-4 shadow rounded bg-white h-100">
              <h4>🗺️ Customized Itineraries</h4>
              <p>
                Plan your journey your way with tailor-made travel experiences.
              </p>
            </div>
          </div>
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="p-4 shadow rounded bg-white h-100">
              <h4>🛫 Best Travel Deals</h4>
              <p>
                Enjoy exclusive discounts on flights, hotels, and tour packages.
              </p>
            </div>
          </div>
          <div
            className="col-md-4 mb-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="p-4 shadow rounded bg-white h-100">
              <h4>💬 24/7 Support</h4>
              <p>Our expert travel agents are here for you at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Gallery */}
      <section className="mb-5">
        <h2 className="text-center mb-4" data-aos="fade-up">
          Popular Destinations
        </h2>
        <div className="row g-4">
          {[image1, image2, image3, image4].map((img, index) => (
            <div
              className="col-6 col-md-3"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card shadow-sm h-100">
                <img
                  src={img}
                  alt={`Destination ${index + 1}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-center bg-light p-5 rounded shadow"
        data-aos="fade-up"
      >
        <h2>Ready to Start Your Adventure?</h2>
        <p className="lead">
          Don't wait! Book your dream trip today and create memories that last a
          lifetime.
        </p>
        <Link to="/booking">
          <button className="btn btn-primary px-4 py-2">Start Booking</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
