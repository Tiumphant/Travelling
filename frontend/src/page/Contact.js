import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page container py-5">
      <h2 className="text-center mb-4 animate-fade-in text-primary">
        📬 Get in Touch With Us
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-8 animate-slide-up">
          <div className="card shadow p-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 animate-fade-in-slow">
        <p>📍 123 Wanderlust Lane, City of Dreams</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ contact@travelmagic.com</p>
      </div>
    </div>
  );
}

export default Contact;
