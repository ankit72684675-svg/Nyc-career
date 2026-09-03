import "./Featuredjobs.css";


function FeaturedJobs() {
  
  return (
    
<section className="jobs-training-section">

  {/* =========================
      FEATURED JOBS
  ========================= */}

  <div className="featured-jobs">

    <div className="section-title-row">

      <h2>
        💼 &nbsp; Featured Jobs
      </h2>

      <a href="#">View all jobs →</a>

    </div>


    <div className="job-cards">

      {/* JOB 1 */}

      <div className="job-card">

        <div className="company-logo tcs-logo">
          <span>T</span>
          <small>TATA<br />CONSULTANCY<br />SERVICES</small>
        </div>

        <h3>Software Engineer</h3>

        <p className="company-name">
          Tata Consultancy Services
        </p>

        <p className="location">
          📍 Hyderabad, India
        </p>

        <div className="job-tags">
          <span>2-4 Yrs</span>
          <span>Full Time</span>
        </div>

        <div className="job-details">
          View Details →
        </div>

      </div>


      {/* JOB 2 */}

      <div className="job-card">

        <div className="company-logo wipro-logo">
          <strong>wipro</strong>
        </div>

        <h3>Data Analyst</h3>

        <p className="company-name">
          Wipro
        </p>

        <p className="location">
          📍 Bangalore, India
        </p>

        <div className="job-tags">
          <span>1-3 Yrs</span>
          <span>Full Time</span>
        </div>

        <div className="job-details">
          View Details →
        </div>

      </div>


      {/* JOB 3 */}

      <div className="job-card">

        <div className="company-logo infosys-logo">
          Infosys
        </div>

        <h3>System Engineer</h3>

        <p className="company-name">
          Infosys
        </p>

        <p className="location">
          📍 Pune, India
        </p>

        <div className="job-tags">
          <span>0-2 Yrs</span>
          <span>Full Time</span>
        </div>

        <div className="job-details">
          View Details →
        </div>

      </div>

    </div>

  </div>


  {/* =========================
      POPULAR TRAINING
  ========================= */}

  <div className="popular-training">

    <div className="section-title-row">

      <h2>
        🎓 &nbsp; Popular Training Programs
      </h2>

      <a href="#">View all courses →</a>

    </div>


    <div className="training-cards">

      {/* PROGRAM 1 */}

      <div className="training-card">

        <img
          src="training1.png"
          alt="Job Ready Program"
        />

        <div className="training-content">

          <h3>Job Ready Program</h3>

          <p>◷ 8 Weeks</p>

          <div className="price">
            ₹4,999 <del>₹7,999</del>
          </div>

          <button>
            Enroll Now
          </button>

        </div>

      </div>


      {/* PROGRAM 2 */}

      <div className="training-card">

        <img
          src="training2.png"
          alt="Professional English"
        />

        <div className="training-content">

          <h3>Professional English</h3>

          <p>◷ 6 Weeks</p>

          <div className="price">
            ₹3,999 <del>₹6,999</del>
          </div>

          <button>
            Enroll Now
          </button>

        </div>

      </div>


      {/* PROGRAM 3 */}

      <div className="training-card">

        <img
          src="training3.png"
          alt="Interview Preparation"
        />

        <div className="training-content">

          <h3>Interview Preparation</h3>

          <p>◷ 4 Weeks</p>

          <div className="price">
            ₹2,999 <del>₹4,999</del>
          </div>

          <button>
            Enroll Now
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
  );
}

export default FeaturedJobs;