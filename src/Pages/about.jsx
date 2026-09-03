import React from "react";
import "./About.css";

const services = [
  {
    number: "01",
    icon: "♙",
    title: "Career Development",
    text: "Build professional skills, confidence and the practical abilities needed to move towards your career goals.",
  },
  {
    number: "02",
    icon: "♧",
    title: "English & Communication",
    text: "Improve spoken English, workplace communication and professional communication skills.",
  },
  {
    number: "03",
    icon: "▦",
    title: "Personality Development",
    text: "Develop confidence, professionalism and the personality needed to succeed in the workplace.",
  },
  {
    number: "04",
    icon: "♧",
    title: "Interview Preparation",
    text: "Prepare for interviews through structured guidance, practice and mock interview sessions.",
  },
  {
    number: "05",
    icon: "▱",
    title: "Job Opportunities",
    text: "Explore relevant opportunities and connect with employers looking for capable talent.",
  },
  {
    number: "06",
    icon: "♧",
    title: "Recruitment Solutions",
    text: "Help organizations discover, screen and connect with suitable candidates.",
  },
];

const journey = [
  {
    number: "01",
    icon: "▢",
    title: "Learn",
    text: "Build the skills you need for your career.",
  },
  {
    number: "02",
    icon: "♧",
    title: "Prepare",
    text: "Develop confidence and interview readiness.",
  },
  {
    number: "03",
    icon: "◎",
    title: "Practice",
    text: "Practice communication and interview situations.",
  },
  {
    number: "04",
    icon: "♧",
    title: "Connect",
    text: "Connect with relevant career opportunities.",
  },
  {
    number: "05",
    icon: "⌁",
    title: "Grow",
    text: "Keep developing and build your career.",
  },
];

const candidatePoints = [
  "Job-ready training",
  "Spoken English & communication",
  "Personality development",
  "Interview preparation",
  "Mock interviews",
  "Resume & LinkedIn development",
  "Career guidance",
  "Job opportunities",
];

const employerPoints = [
  "Talent sourcing",
  "Candidate screening",
  "Entry-level hiring",
  "Candidate assessment",
  "Interview coordination",
  "Recruitment support",
];

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero">

        {/* HERO IMAGE
            Put image here:
            public/images/hero-career.jpg
        */}
        <div className="hero-image"></div>

        <div className="hero-overlay"></div>

        {/* Decorative golden curve */}
        <div className="hero-curve">
          <span className="curve-arrow">↑</span>
        </div>

        <div className="about-container hero-container">

          <div className="hero-content">

            <span className="hero-kicker">
              ABOUT NYC
            </span>

            <h1>
              Navigate Your
              <br />
              Career
              <span>
                With
                <br />
                Confidence.
              </span>
            </h1>

            <p>
              NYC — Navigate Your Career helps individuals become
              professionally ready for employment through training,
              communication development and interview preparation while
              helping organizations connect with capable talent.
            </p>

            <div className="hero-buttons">

              <button className="main-btn gold-btn">
                Explore Careers
                <span>→</span>
              </button>

              <button className="main-btn outline-btn">
                Hire Talent
                <span>→</span>
              </button>

            </div>

          </div>


          {/* HERO JOURNEY BAR */}

          <div className="hero-steps">

            <div className="hero-step">

              <div className="step-icon">
                ♧
              </div>

              <div>
                <strong>Train</strong>
                <small>Build Skills</small>
              </div>

            </div>

            <div className="step-arrow">»</div>

            <div className="hero-step">

              <div className="step-icon">
                ♧
              </div>

              <div>
                <strong>Prepare</strong>
                <small>Build Confidence</small>
              </div>

            </div>

            <div className="step-arrow">»</div>

            <div className="hero-step">

              <div className="step-icon">
                ♧
              </div>

              <div>
                <strong>Connect</strong>
                <small>Find Opportunities</small>
              </div>

            </div>

            <div className="step-arrow">»</div>

            <div className="hero-step">

              <div className="step-icon">
                ♧
              </div>

              <div>
                <strong>Grow</strong>
                <small>Build Your Career</small>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="who-section">

        <div className="about-container who-grid">

          <div className="who-content">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              We prepare people
              <br />
              for opportunities.
            </h2>

            <p className="strong-text">
              NYC — Navigate Your Career is a career development,
              job-readiness training and recruitment platform.
            </p>

            <p>
              We help candidates develop professional skills,
              communication, confidence and interview readiness
              needed to become job-ready.
            </p>

            <p>
              Once candidates are ready, NYC helps connect suitable
              candidates with relevant employers and interview
              opportunities.
            </p>


            <div className="philosophy">

              <span>OUR PHILOSOPHY</span>

              <h3>
                Learn.
                <br />
                Prepare.
                <br />
                Connect.
                <br />
                Grow.
              </h3>

              <p>
                From building skills to connecting with opportunities,
                NYC supports candidates throughout their career journey.
              </p>

            </div>

          </div>


          {/* ABOUT IMAGE CARD

              Put image here:
              public/images/about-city.jpg
          */}

          <div
            className="purpose-card"
            style={{
              backgroundImage:
                "linear-gradient(rgba(48,7,13,.68), rgba(48,7,13,.78)), url('/images/about-city.jpg')",
            }}
          >

            <div className="quote-mark">“</div>

            <h3>
              Turning potential
              <br />
              into opportunity.
            </h3>

            <p>
              From learning new skills to preparing for interviews
              and connecting with employers, NYC supports candidates
              throughout their career journey.
            </p>

            <div className="purpose-divider"></div>

            <div className="purpose-stats">

              <div>
                <span>Career Focused</span>
                <small>Development</small>
                <strong>01</strong>
              </div>

              <div>
                <span>Job-ready</span>
                <small>Preparation</small>
                <strong>02</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="services-section">

        <div className="about-container">

          <div className="center-title">

            <span className="section-label">
              WHAT WE DO
            </span>

            <h2>
              Everything You Need to Move Forward
            </h2>

            <p>
              NYC brings career development, training, interview
              preparation and recruitment together in one platform.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (

              <article
                className="service-card"
                key={service.number}
              >

                <div className="service-header">

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <strong>
                    {service.number}
                  </strong>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          JOURNEY
      ====================================================== */}

      <section className="journey-section">

        <div className="about-container">

          <div className="center-title">

            <span className="section-label">
              THE NYC JOURNEY
            </span>

            <h2>
              From Potential to Opportunity
            </h2>

          </div>


          <div className="journey-grid">

            {journey.map((item) => (

              <div
                className="journey-card"
                key={item.number}
              >

                <div className="journey-number">
                  {item.number}
                </div>

                <div className="journey-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CANDIDATES / EMPLOYERS
      ====================================================== */}

      <section className="audience-section">

        <div className="about-container">

          <div className="audience-grid">


            {/* CANDIDATES */}

            <div
              className="audience-card candidate-card"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(48,7,13,.87), rgba(48,7,13,.91)), url('/images/candidate.jpg')",
              }}
            >

              <div className="audience-top">

                <div className="audience-icon">
                  ♧
                </div>

                <span>
                  FOR CANDIDATES
                </span>

              </div>

              <h2>
                Build Skills.
                <br />
                Build Confidence.
              </h2>

              <p>
                Develop professional skills, improve communication,
                prepare for interviews and discover relevant job
                opportunities.
              </p>


              <div className="audience-list">

                {candidatePoints.map((point) => (

                  <div key={point}>
                    <span>✓</span>
                    {point}
                  </div>

                ))}

              </div>


              <button className="audience-button">
                Start Your Journey
                <span>→</span>
              </button>

            </div>


            {/* EMPLOYERS */}

            <div
              className="audience-card employer-card"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(48,7,13,.87), rgba(48,7,13,.91)), url('/images/employer.jpg')",
              }}
            >

              <div className="audience-top">

                <div className="audience-icon">
                  ♧
                </div>

                <span>
                  FOR EMPLOYERS
                </span>

              </div>

              <h2>
                Find Capable
                <br />
                Talent.
              </h2>

              <p>
                Connect with job-ready candidates and simplify your
                recruitment process with talent sourcing and candidate
                screening support.
              </p>


              <div className="audience-list">

                {employerPoints.map((point) => (

                  <div key={point}>
                    <span>✓</span>
                    {point}
                  </div>

                ))}

              </div>


              <button className="audience-button dark-button">
                Hire Talent
                <span>→</span>
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="final-section">

        {/* Bottom city image
            Put image here:
            public/images/cta-city.jpg
        */}

        <div
          className="final-background"
          style={{
            backgroundImage:
              "linear-gradient(rgba(48,7,13,.78), rgba(48,7,13,.86)), url('/images/cta-city.jpg')",
          }}
        ></div>


        <div className="final-content">

          <span className="section-label">
            NAVIGATE YOUR CAREER
          </span>

          <h2>
            Your Next Opportunity
            <br />
            Starts Here.
          </h2>

          <p>
            Learn new skills, prepare for opportunities and
            connect with the right career path.
          </p>


          <div className="hero-buttons">

            <button className="main-btn gold-btn">
              Explore Careers
              <span>→</span>
            </button>

            <button className="main-btn outline-btn">
              Hire Talent
              <span>→</span>
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;