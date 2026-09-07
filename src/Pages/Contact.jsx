import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/FinalCTA";
import "./Contact.css";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    setSubmitted(true);
    setFormData(initialFormData);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const contactChannels = [
    {
      title: "Email",
      copy: "Reach out to our team for enquiries and support.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 6 9.75-6" />
        </svg>
      ),
    },
    {
      title: "Phone",
      copy: "Speak with our career and recruitment team.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.092l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.2-7.2 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.906 3.102A1.125 1.125 0 005.814 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      title: "Location",
      copy: "India — serving candidates and employers nationwide.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* ==================== HERO ==================== */}
        <section className="contact-hero">
          <div className="contact-container contact-hero-grid">
            <div className="contact-hero-content">
              <span className="contact-tag">Contact NYC</span>

              <h1>
                Let's build your career together
              </h1>

              <p className="contact-hero-text">
                Whether you're looking for career guidance, professional
                training, job opportunities, or talented candidates, our
                team is here to help.
              </p>
            </div>

            <div className="contact-hero-mark" aria-hidden="true">
              <svg viewBox="0 0 240 240" fill="none">
                <circle cx="120" cy="120" r="118" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                <circle cx="120" cy="120" r="82" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <path
                  d="M120 38 L120 202 M38 120 L202 120"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.25"
                />
                <circle cx="120" cy="120" r="5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section className="contact-section">
          <div className="contact-container contact-grid">
            {/* LEFT SIDE */}
            <div className="contact-info">
              <span className="contact-tag dark">Get in touch</span>

              <h2>How can we help you?</h2>

              <p className="contact-description">
                Have a question about our training programs, career
                opportunities, or recruitment services? Send us your
                enquiry and the NYC team will get back to you.
              </p>

              {/* Contact Details */}
              <ul className="contact-route">
                {contactChannels.map((channel) => (
                  <li className="contact-route-item" key={channel.title}>
                    <span className="contact-route-marker">{channel.icon}</span>
                    <div>
                      <h3>{channel.title}</h3>
                      <p>{channel.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Philosophy */}
              <div className="philosophy-card">
                <span className="philosophy-label">Our philosophy</span>
                <h3>Learn. Prepare. Connect. Grow.</h3>
                <p>
                  We prepare people for opportunities and help
                  organizations find capable talent.
                </p>
              </div>
            </div>

            {/* ==================== FORM ==================== */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send us an enquiry</h2>
                <p>Fill out the form below and our team will get back to you.</p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="success-message" role="status">
                  Thank you — your enquiry has been submitted successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate={false}>
                {/* Name + Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full name <span>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email address <span>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone number <span>*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>

                {/* Enquiry Type */}
                <div className="form-group">
                  <label htmlFor="enquiryType">
                    Enquiry type <span>*</span>
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select enquiry type</option>
                    <option value="Candidate">Candidate</option>
                    <option value="Employer">Employer</option>
                    <option value="Training">Training</option>
                    <option value="General">General</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    required
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="submit-button">
                  Submit enquiry
                </button>

                <p className="form-note">
                  By submitting this form, you agree to be contacted by the
                  NYC team regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="contact-cta">
          <div className="contact-container cta-content">
            <div>
              <span className="contact-tag light">Your next opportunity starts here</span>
              <h2>Ready to navigate your career?</h2>
            </div>

            <Link to="/ExploreCareer" className="cta-button">
              Explore careers
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
