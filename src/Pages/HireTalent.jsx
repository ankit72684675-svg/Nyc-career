import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./HireTalent.css";

function HireTalent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="hire-page">
      <Navbar />

      <main>
        <section className="hire-hero" aria-labelledby="hire-heading">
          <div className="hire-container hire-hero-grid">
            <div>
              <span className="hire-eyebrow">For employers</span>
              <h1 id="hire-heading">Meet the people who can move your business forward.</h1>
              <p>
                Tell us what your team needs. We connect employers with skilled,
                prepared candidates who are ready to contribute.
              </p>
            </div>
            <div className="hire-hero-mark" aria-hidden="true">
              <span className="hire-mark-line hire-mark-line-one"></span>
              <span className="hire-mark-line hire-mark-line-two"></span>
              <span className="hire-mark-dot hire-mark-dot-one"></span>
              <span className="hire-mark-dot hire-mark-dot-two"></span>
              <span className="hire-mark-dot hire-mark-dot-three"></span>
            </div>
          </div>
        </section>

        <section className="hire-section">
          <div className="hire-container hire-grid">
            <div className="hire-copy">
              <span className="hire-section-label">A better way to hire</span>
              <h2>From requirement to right fit.</h2>
              <p>
                NYC supports your hiring process with practical talent sourcing,
                candidate screening, interview coordination, and recruitment support.
              </p>

              <ul className="hire-benefits">
                <li><span>01</span> Job-ready candidates</li>
                <li><span>02</span> Structured candidate screening</li>
                <li><span>03</span> Recruitment support that stays personal</li>
              </ul>

              <Link className="hire-back-link" to="/contact">
                Have a general enquiry? Contact us <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="hire-form-panel">
              <div className="hire-form-heading">
                <p className="hire-section-label">Start a conversation</p>
                <h2>Tell us about your hiring need</h2>
                <p>Our team will review your brief and get back to you.</p>
              </div>

              {submitted && (
                <div className="hire-success" role="status">
                  Thanks. Your hiring brief has been sent to our team.
                </div>
              )}

              <form className="hire-form" onSubmit={handleSubmit}>
                <div className="hire-form-row">
                  <div className="hire-field">
                    <label htmlFor="hire-name">Your name</label>
                    <input id="hire-name" name="name" type="text" placeholder="Full name" required />
                  </div>
                  <div className="hire-field">
                    <label htmlFor="hire-company">Company</label>
                    <input id="hire-company" name="company" type="text" placeholder="Company name" required />
                  </div>
                </div>

                <div className="hire-form-row">
                  <div className="hire-field">
                    <label htmlFor="hire-email">Work email</label>
                    <input id="hire-email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="hire-field">
                    <label htmlFor="hire-role">Role to fill</label>
                    <input id="hire-role" name="role" type="text" placeholder="Job title" required />
                  </div>
                </div>

                <div className="hire-field">
                  <label htmlFor="hire-message">What are you looking for?</label>
                  <textarea
                    id="hire-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about the role, skills, and timeline."
                    required
                  ></textarea>
                </div>

                <button className="hire-submit" type="submit">
                  Send hiring brief <span aria-hidden="true">&rarr;</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HireTalent;
