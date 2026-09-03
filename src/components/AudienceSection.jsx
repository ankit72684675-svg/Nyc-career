
import "./AudienceSection.css";

function AudienceSection() {
  return (
    <section className="audience-section">

  {/* ================= CANDIDATES ================= */}

  <div className="audience-box candidates-box">

    <div className="audience-image">
      <img src="candidate.png" alt="Candidate" />
    </div>

    <div className="audience-content">

      <h2>For Candidates</h2>

      <p className="audience-description">
        We help you build the skills, confidence and
        career you deserve.
      </p>

      <div className="feature-grid">

        <div className="feature-item">
          <span>👨‍🏫</span>
          <p>Job-ready<br />Training</p>
        </div>

        <div className="feature-item">
          <span>💬</span>
          <p>Spoken<br />English</p>
        </div>

        <div className="feature-item">
          <span>👥</span>
          <p>Professional<br />Communication</p>
        </div>

        <div className="feature-item">
          <span>🧑‍💼</span>
          <p>Personality<br />Development</p>
        </div>

        <div className="feature-item">
          <span>🎯</span>
          <p>Interview<br />Preparation</p>
        </div>

        <div className="feature-item">
          <span>💻</span>
          <p>Mock<br />Interviews</p>
        </div>

        <div className="feature-item">
          <span>📄</span>
          <p>Resume & LinkedIn<br />Development</p>
        </div>

        <div className="feature-item">
          <span>💼</span>
          <p>Job<br />Opportunities</p>
        </div>

      </div>

      <button className="audience-btn candidate-btn">
        Explore Training <span>→</span>
      </button>

    </div>

  </div>


  {/* ================= EMPLOYERS ================= */}

  <div className="audience-box employers-box">

    <div className="audience-content">

      <h2>For Employers</h2>

      <p className="audience-description">
        We connect you with skilled, job-ready
        and reliable talent.
      </p>

      <div className="feature-grid employer-features">

        <div className="feature-item">
          <span>🔎</span>
          <p>Talent Sourcing</p>
        </div>

        <div className="feature-item">
          <span>📋</span>
          <p>Candidate<br />Screening</p>
        </div>

        <div className="feature-item">
          <span>🧑‍💼</span>
          <p>Entry-level<br />Hiring</p>
        </div>

        <div className="feature-item">
          <span>👤</span>
          <p>Candidate<br />Assessment</p>
        </div>

        <div className="feature-item">
          <span>🤝</span>
          <p>Interview<br />Coordination</p>
        </div>

        <div className="feature-item">
          <span>💼</span>
          <p>Recruitment<br />Support</p>
        </div>

      </div>

      <button className="audience-btn employer-btn">
        Hire Talent <span>→</span>
      </button>

    </div>

    <div className="audience-image employer-image">
      <img src="employer.png" alt="Employer" />
    </div>

  </div>

</section>

  );
}

export default AudienceSection;