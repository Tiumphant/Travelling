import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "aos/dist/aos.css";
import "./About.css";

import image1 from "../asset/pexels-cagdas-birsen-214376922-12549609 (1).jpg";
import image2 from "../asset/pexels-clickerhappy-597049.jpg";
import image3 from "../asset/pexels-habi-dompil-1539296-2964163.jpg";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-container container my-5">
      <h1 className="about-title text-center" data-aos="fade-down">
        About Our Travel Company
      </h1>

      <p className="about-description text-center" data-aos="fade-up">
        We believe that travel is not just about visiting places, but about
        creating unforgettable experiences. Our expert team crafts personalized
        tours that immerse you in the culture, beauty, and spirit of every
        destination.
      </p>

      <div className="carousel-wrapper" data-aos="zoom-in-up">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
        >
          <div>
            <img
              src={image1}
              alt="Beach Destination"
              className="carousel-img"
            />
            <p className="legend">Relax at breathtaking beaches</p>
          </div>
          <div>
            <img src={image2} alt="Mountain Trip" className="carousel-img" />
            <p className="legend">Adventure into majestic mountains</p>
          </div>
          <div>
            <img src={image3} alt="City Tour" className="carousel-img" />
            <p className="legend">Explore vibrant cities</p>
          </div>
        </Carousel>
      </div>

      <div className="about-extra-text mt-5" data-aos="fade-left">
        <h2>Your Journey Begins Here</h2>
        <p>
          With over a decade of experience, we help you explore hidden gems and
          top destinations alike. Whether you dream of romantic getaways,
          thrilling adventures, or relaxing retreats, we turn your dreams into
          reality.
        </p>
      </div>

      <section className="about-details mt-4" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <ul className="about-list">
          <li data-aos="fade-right">
            🌍 Expertly curated international and domestic tours
          </li>
          <li data-aos="fade-right" data-aos-delay="100">
            💼 Personalized travel planning
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            🏨 Luxury accommodation and transport options
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            🎒 Group and solo traveler packages
          </li>
          <li data-aos="fade-right" data-aos-delay="400">
            📞 24/7 customer support
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
