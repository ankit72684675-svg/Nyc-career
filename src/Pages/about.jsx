import Navbar from "../components/navbar";
import Footer from "../components/FinalCTA";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= ABOUT PAGE ================= */}
      <main className="about-page">

        {/* ================= HERO ================= */}
        <section className="hero about-hero">
          <div className="hero-dotgrid"></div>
          <div className="hero-glow"></div>

          <div className="wrap">
            <div className="hero-copy">
              <span className="eyebrow">
                About NYC
              </span>

              <h1>
                Navigate Your Career.
                <br />
                Build Your Future.
              </h1>

              <p>
                NYC helps individuals become professionally ready for real
                opportunities while helping organizations connect with
                capable, prepared talent.
              </p>

              <div className="hero-actions">
                <a href="#services" className="btn btn-gold">
                  Explore Training
                </a>

                <Link to="/ExploreCareer" className="btn btn-outline-light">
                  Explore Careers
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <svg
                viewBox="0 0 480 460"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="pathGrad"
                    x1="0"
                    y1="1"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0" stopColor="#C9A24A" />
                    <stop offset="1" stopColor="#E0B85A" />
                  </linearGradient>
                </defs>

                <path
                  d="M40,380 C120,380 100,300 180,290 C260,280 240,200 320,180 C380,165 380,110 440,90"
                  fill="none"
                  stroke="url(#pathGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="1 9"
                  strokeLinecap="round"
                />

                {/* Learn */}
                <g transform="translate(40,380)">
                  <circle r="30" fill="#4A0B13" />
                  <circle
                    r="30"
                    fill="none"
                    stroke="#C9A24A"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />

                  <path
                    d="M-10,-6 L0,-11 L10,-6 L10,6 L0,11 L-10,6 Z"
                    fill="none"
                    stroke="#E0B85A"
                    strokeWidth="1.6"
                  />
                </g>

                <text
                  x="40"
                  y="428"
                  textAnchor="middle"
                  fill="#F7F1E5"
                  fontFamily="Manrope"
                  fontSize="13"
                  fontWeight="700"
                >
                  Learn
                </text>

                {/* Prepare */}
                <g transform="translate(180,290)">
                  <circle r="34" fill="#30070D" />

                  <circle
                    r="34"
                    fill="none"
                    stroke="#C9A24A"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />

                  <circle
                    r="12"
                    fill="none"
                    stroke="#E0B85A"
                    strokeWidth="1.6"
                  />

                  <circle r="4" fill="#E0B85A" />
                </g>

                <text
                  x="180"
                  y="342"
                  textAnchor="middle"
                  fill="#F7F1E5"
                  fontFamily="Manrope"
                  fontSize="13"
                  fontWeight="700"
                >
                  Prepare
                </text>

                {/* Connect */}
                <g transform="translate(320,180)">
                  <circle r="30" fill="#4A0B13" />

                  <circle
                    r="30"
                    fill="none"
                    stroke="#C9A24A"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />

                  <circle
                    cx="-9"
                    cy="-3"
                    r="4.5"
                    fill="#E0B85A"
                  />

                  <circle
                    cx="9"
                    cy="7"
                    r="4.5"
                    fill="#E0B85A"
                  />

                  <line
                    x1="-9"
                    y1="-3"
                    x2="9"
                    y2="7"
                    stroke="#E0B85A"
                    strokeWidth="1.4"
                  />
                </g>

                <text
                  x="320"
                  y="228"
                  textAnchor="middle"
                  fill="#F7F1E5"
                  fontFamily="Manrope"
                  fontSize="13"
                  fontWeight="700"
                >
                  Connect
                </text>

                {/* Grow */}
                <g transform="translate(440,90)">
                  <circle r="38" fill="#C9A24A" />

                  <path
                    d="M-12,10 L0,-14 L12,10 Z"
                    fill="#30070D"
                  />
                </g>

                <text
                  x="440"
                  y="146"
                  textAnchor="middle"
                  fill="#F7F1E5"
                  fontFamily="Manrope"
                  fontSize="13"
                  fontWeight="700"
                >
                  Grow
                </text>

                <circle
                  cx="440"
                  cy="90"
                  r="54"
                  fill="none"
                  stroke="#E0B85A"
                  strokeWidth="1"
                  opacity="0.35"
                />
              </svg>
            </div>
          </div>
        </section>


        {/* ================= WHO WE ARE ================= */}
        <section className="bg-white" id="who">
          <div className="wrap">

            <div className="section-head">
              <div className="rule"></div>
              <h2>Who We Are</h2>
            </div>

            <div className="who-grid">

              <div className="who-intro">
                <p>
                  NYC — Navigate Your Career is a career development,
                  job-readiness training and recruitment & talent solutions
                  platform.
                </p>

                <p>
                  We work on both sides of the employment journey — helping
                  individuals become genuinely prepared for the workplace,
                  and helping organizations connect with candidates who are
                  ready to contribute from day one.
                </p>

                <p>
                  It's a single, connected process: capability is built first,
                  then matched with opportunity.
                </p>
              </div>

              <div className="who-cols">

                {/* Candidates */}
                <div className="who-card">
                  <span className="sub">For Candidates</span>

                  <h4>Get workplace ready</h4>

                  <ul>
                    {[
                      "Skill development",
                      "Professional communication",
                      "Spoken English",
                      "Personality development",
                      "Interview preparation & mock interviews",
                      "Resume & LinkedIn profile development",
                      "Career guidance",
                      "Job opportunities",
                    ].map((item, index) => (
                      <li key={index}>
                        <span className="check">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Employers */}
                <div className="who-card">
                  <span className="sub">For Employers</span>

                  <h4>Hire with confidence</h4>

                  <ul>
                    {[
                      "Talent sourcing",
                      "Candidate screening",
                      "Entry-level hiring",
                      "Candidate assessment",
                      "Interview coordination",
                      "Recruitment support",
                      "Talent solutions",
                    ].map((item, index) => (
                      <li key={index}>
                        <span className="check">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ================= PHILOSOPHY ================= */}
        <section className="bg-cream">
          <div className="wrap">

            <div className="section-head center">
              <h2>
                Learn. Prepare. Connect. Grow.
              </h2>

              <p>
                Four stages that shape how we work with every candidate
                and every employer.
              </p>
            </div>

            <div className="phil-grid">

              {[
                {
                  number: "01",
                  title: "Learn",
                  text: "Build the skills and knowledge required for the workplace.",
                },
                {
                  number: "02",
                  title: "Prepare",
                  text: "Develop communication, confidence, professional presence and interview readiness.",
                },
                {
                  number: "03",
                  title: "Connect",
                  text: "Connect job-ready candidates with relevant career opportunities and employers with capable talent.",
                },
                {
                  number: "04",
                  title: "Grow",
                  text: "Support long-term career development and professional growth.",
                },
              ].map((item) => (
                <div className="phil-card" key={item.number}>

                  <div className="phil-num">
                    {item.number}
                  </div>

                  <div className="phil-icon">
                    {item.number === "01" && "📖"}
                    {item.number === "02" && "🎯"}
                    {item.number === "03" && "🔗"}
                    {item.number === "04" && "📈"}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= CAREER JOURNEY ================= */}
        <section className="bg-white">
          <div className="wrap">

            <div className="section-head">
              <div className="rule"></div>
              <h2>From Potential to Opportunity</h2>
            </div>

            <div className="journey-track">

              <div className="journey-line"></div>

              {[
                ["01", "Learn", "Foundational skills"],
                ["02", "Prepare", "Communication & confidence"],
                ["03", "Practice", "Mock interviews"],
                ["04", "Connect", "Matched with employers"],
                ["05", "Grow", "Long-term progression"],
              ].map((item) => (
                <div className="journey-step" key={item[0]}>

                  <div className="journey-dot">
                    {item[0]}
                  </div>

                  <h4>{item[1]}</h4>

                  <p>{item[2]}</p>
                </div>
              ))}

            </div>

            <p className="journey-note">
              NYC focuses on transforming potential into professional
              readiness, then connecting prepared candidates with suitable
              opportunities — one deliberate stage at a time.
            </p>

          </div>
        </section>


        {/* ================= SERVICES ================= */}
        <section className="bg-cream" id="services">
          <div className="wrap">

            <div className="section-head">
              <div className="rule"></div>
              <h2>What We Do</h2>
            </div>

            <div className="services-grid">

              {[
                [
                  "Career Development",
                  "Helping individuals understand their strengths, improve their professional skills and build a clear career direction.",
                ],
                [
                  "Job-Ready Training",
                  "Practical training designed to prepare candidates for workplace expectations.",
                ],
                [
                  "English & Communication",
                  "Developing professional English, workplace communication and confidence.",
                ],
                [
                  "Interview Preparation",
                  "Helping candidates prepare through interview guidance, practice and mock interviews.",
                ],
                [
                  "Talent Solutions",
                  "Helping organizations identify, assess and connect with capable candidates.",
                ],
                [
                  "Job Opportunities",
                  "Connecting job-ready candidates with relevant opportunities.",
                ],
              ].map((service, index) => (
                <div className="service-card" key={index}>

                  <div className="service-icon">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{service[0]}</h3>

                  <p>{service[1]}</p>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= WHY NYC ================= */}
        <section className="bg-burgundy">
          <div className="wrap">

            <div className="why-wrap">

              <div className="section-head">
                <div className="rule"></div>

                <h2 className="white-title">
                  Why Choose NYC?
                </h2>

                <p>
                  A practical, credibility-first approach — built around
                  preparation, not promises.
                </p>
              </div>

              <div className="why-list">

                {[
                  [
                    "Job-ready, not just job-seeking",
                    "We focus on genuine readiness, so candidates walk into opportunities prepared to contribute.",
                  ],
                  [
                    "Practical career preparation",
                    "Training built around real workplace expectations, not theory alone.",
                  ],
                  [
                    "Communication and confidence development",
                    "Spoken English, presentation and professional presence, developed with care.",
                  ],
                  [
                    "Interview-focused preparation",
                    "Structured guidance, practice and mock interviews ahead of the real thing.",
                  ],
                  [
                    "Candidate and employer ecosystem",
                    "Two sides of the employment journey, supported within a single platform.",
                  ],
                  [
                    "Professional and human approach",
                    "Every candidate and employer is treated as a partner, not a transaction.",
                  ],
                ].map((item, index) => (
                  <div className="why-item" key={index}>

                    <span className="why-mark">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h4>{item[0]}</h4>
                      <p>{item[1]}</p>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>


        {/* ================= ECOSYSTEM ================= */}
        <section
          className="bg-white"
          id="ecosystem"
        >
          <div className="wrap">

            <div className="section-head">
              <div className="rule"></div>

              <h2>A Connected Ecosystem</h2>

              <p>
                Built for two audiences, moving toward the same outcome.
              </p>
            </div>

          </div>

          <div className="eco-split">

            {/* Candidates */}
            <div className="eco-panel candidates">

              <span className="eco-tag">
                For Candidates
              </span>

              <h3>
                From preparation to employment
              </h3>

              <p>
                NYC helps candidates move from learning and preparation
                toward real employment opportunities — step by step,
                with support at every stage.
              </p>

              <div className="eco-flow">
                <span className="step">Learn</span>
                <span className="arrow">→</span>
                <span className="step">Practice</span>
                <span className="arrow">→</span>
                <span className="step">Prepare</span>
                <span className="arrow">→</span>
                <span className="step">Apply</span>
                <span className="arrow">→</span>
                <span className="step">Interview</span>
                <span className="arrow">→</span>
                <span className="step">Grow</span>
              </div>

            </div>


            {/* Employers */}
            <div className="eco-panel employers">

              <span className="eco-tag">
                For Employers
              </span>

              <h3>
                From requirement to hire
              </h3>

              <p>
                NYC helps employers connect with candidates who have been
                prepared for professional environments, reducing the effort
                of sourcing and screening.
              </p>

              <div className="eco-flow">
                <span className="step">Define Need</span>
                <span className="arrow">→</span>
                <span className="step">Source Talent</span>
                <span className="arrow">→</span>
                <span className="step">Screen</span>
                <span className="arrow">→</span>
                <span className="step">Interview</span>
                <span className="arrow">→</span>
                <span className="step">Hire</span>
              </div>

            </div>

          </div>
        </section>


        {/* ================= MISSION ================= */}
        <section className="bg-burgundy">
          <div className="wrap">

            <div className="statement">

              <div className="rule"></div>

              <span className="section-kicker">
                Our Mission
              </span>

              <h2>
                To prepare people for opportunities and help organizations
                find capable talent.
              </h2>

              <p>
                NYC exists to bridge the gap between potential and
                professional opportunity. We do this through skills,
                communication, confidence and structured preparation —
                paired with meaningful connections between candidates and
                employers who are the right fit for one another.
              </p>

            </div>

          </div>
        </section>


        {/* ================= VISION ================= */}
        <section className="bg-cream">
          <div className="wrap">

            <div className="statement">

              <div className="rule"></div>

              <span className="section-kicker">
                Our Vision
              </span>

              <h2 className="dark-heading">
                A trusted career and talent ecosystem.
              </h2>

              <p>
                To build a trusted career and talent ecosystem where people
                can continuously develop their skills, become confident
                professionals and connect with meaningful opportunities.
              </p>

            </div>

          </div>
        </section>


        {/* ================= DIFFERENT ================= */}
        <section className="bg-white">
          <div className="wrap">

            <div className="more-wrap">

              <div className="more-copy">

                <div className="rule"></div>

                <span className="section-kicker">
                  More Than a Job Portal
                </span>

                <h2>
                  What Makes NYC Different
                </h2>

                <p>
                  NYC is not only a job listing website. It brings together
                  career development, training, interview preparation, job
                  opportunities, candidate readiness and recruitment &
                  talent solutions — as one connected system, rather than
                  separate services.
                </p>

                <p>
                  Each part strengthens the other: preparation makes
                  candidates more employable, and employable candidates
                  make hiring easier for organizations.
                </p>

              </div>


              <div className="orbit">

                <div className="orbit-center">
                  Career & Talent Ecosystem
                </div>

                <div className="orbit-node node-1">
                  <div className="dot"></div>
                  Career Development
                </div>

                <div className="orbit-node node-2">
                  <div className="dot"></div>
                  Training
                </div>

                <div className="orbit-node node-3">
                  <div className="dot"></div>
                  Interview Preparation
                </div>

                <div className="orbit-node node-4">
                  <div className="dot"></div>
                  Job Opportunities
                </div>

                <div className="orbit-node node-5">
                  <div className="dot"></div>
                  Candidate Readiness
                </div>

                <div className="orbit-node node-6">
                  <div className="dot"></div>
                  Recruitment & Talent Solutions
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ================= TRUST ================= */}
        <section className="bg-cream" id="trust">
          <div className="wrap">

            <div className="section-head">
              <div className="rule"></div>

              <h2>
                Trust & Professional Standards
              </h2>

              <p>
                Preparation and recruitment both depend on trust —
                here's how we protect it.
              </p>
            </div>

            <div className="trust-grid">

              {[
                [
                  "Candidate privacy",
                  "Personal information is handled with care and used only for career-related purposes.",
                ],
                [
                  "Secure user accounts",
                  "Accounts are protected to keep candidate and employer data safe.",
                ],
                [
                  "Verified employer workflows",
                  "Employer activity follows a structured, verified process.",
                ],
                [
                  "Responsible job publishing",
                  "Job listings are published thoughtfully, with accuracy in mind.",
                ],
                [
                  "Admin-reviewed job postings",
                  "Postings are reviewed before candidates see them.",
                ],
                [
                  "Professional recruitment practices",
                  "Recruitment support follows consistent, professional standards.",
                ],
                [
                  "Transparent communication",
                  "Candidates and employers are kept informed at every stage.",
                ],
                [
                  "Consistent processes",
                  "The same careful process applies to every candidate and every employer.",
                ],
              ].map((item, index) => (
                <div className="trust-item" key={index}>

                  <div className="trust-icon">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h4>{item[0]}</h4>

                  <p>{item[1]}</p>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= FUTURE ================= */}
        <section className="bg-white">
          <div className="wrap">

            <div className="future-wrap">

              <div className="future-copy">

                <div className="rule"></div>

                <span className="section-kicker">
                  Future Vision
                </span>

                <h2>
                  Built for Today. Ready for Tomorrow.
                </h2>

                <p>
                  NYC is initially focused on the Indian market, while the
                  platform architecture is designed to support future
                  international recruitment and talent solutions as the
                  ecosystem grows.
                </p>

                <div className="future-tags">

                  {[
                    "Multiple Countries",
                    "International Candidates",
                    "International Employers",
                    "Multiple Currencies",
                    "Multiple Time Zones",
                    "International Workflows",
                  ].map((tag) => (
                    <span className="future-tag" key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>


              <div className="future-panel">

                <div className="future-row">
                  <span className="now">
                    Primary market
                  </span>

                  <span className="later">
                    India
                  </span>
                </div>

                <div className="future-row">
                  <span className="now">
                    Platform design
                  </span>

                  <span className="later">
                    Built for scale
                  </span>
                </div>

                <div className="future-row">
                  <span className="now">
                    Future expansion
                  </span>

                  <span className="later">
                    USA & International
                  </span>
                </div>

                <div className="future-row">
                  <span className="now">
                    Architecture
                  </span>

                  <span className="later">
                    Multi-country ready
                  </span>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="cta-final">

          <div className="hero-dotgrid"></div>

          <div className="wrap">

            <h2>
              Your Next Opportunity Starts With Preparation.
            </h2>

            <p>
              Whether you're building your career or looking for capable
              talent, NYC helps you move from potential to opportunity.
            </p>

            <div className="cta-actions">

              <a href="#" className="btn btn-gold">
                Start Your Career
              </a>

              <a href="#" className="btn btn-outline-light">
                Hire Talent
              </a>

            </div>

          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default About;

