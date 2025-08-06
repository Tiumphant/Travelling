import React, { useEffect } from "react";
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
    <div className="container">
      <section className="hero-section">
        <h1 className="hero-title">Explore the World with Us</h1>
        <p className="hero-subtitle">
          Discover breathtaking destinations, unique experiences, and
          unforgettable memories.
        </p>
      </section>

      <section className="gallery">
        <img
          src={image1}
          alt="Destination 1"
          className="image-card"
          data-aos="fade-up"
        />
        <img
          src={image2}
          alt="Destination 2"
          className="image-card"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <img
          src={image3}
          alt="Destination 3"
          className="image-card"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <img
          src={image4}
          alt="Destination 4"
          className="image-card"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </section>
    </div>
  );
}

export default Home;
