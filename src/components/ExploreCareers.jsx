import "./ExploreCareers.css";

function ExploreCareers() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "NYC Digital",
      location: "New York, NY",
      type: "Full Time",
      category: "Technology",
      salary: "$70K - $95K",
    },
    {
      title: "Marketing Specialist",
      company: "NYC Career Hub",
      location: "New York, NY",
      type: "Full Time",
      category: "Marketing",
      salary: "$55K - $75K",
    },
    {
      title: "Customer Support Executive",
      company: "NYC Connect",
      location: "Brooklyn, NY",
      type: "Full Time",
      category: "Customer Service",
      salary: "$45K - $60K",
    },
    {
      title: "Graphic Designer",
      company: "Creative NYC",
      location: "New York, NY",
      type: "Part Time",
      category: "Design",
      salary: "$40K - $58K",
    },
    {
      title: "HR Executive",
      company: "NYC Talent",
      location: "Queens, NY",
      type: "Full Time",
      category: "Human Resources",
      salary: "$60K - $80K",
    },
    {
      title: "Data Analyst",
      company: "NYC Analytics",
      location: "Manhattan, NY",
      type: "Full Time",
      category: "Technology",
      salary: "$65K - $90K",
    },
  ];

  return (
    <div className="career-page">

      {/* ================= HERO ================= */}
      <section className="career-hero">

        <div className="career-hero-content">
          <span className="career-tag">EXPLORE OPPORTUNITIES</span>

          <h1>
            Find a Career
            <br />
            That Moves You
            <br />
            Forward.
          </h1>

          <p>
            Discover opportunities that match your skills, build your
            confidence and take the next step toward your career goals.
          </p>

          <div className="career-search">
            <input
              type="text"
              placeholder="Search jobs, skills or keywords"
            />

            <select>
              <option value="">All Locations</option>
              <option>New York, NY</option>
              <option>Brooklyn, NY</option>
              <option>Queens, NY</option>
              <option>Manhattan, NY</option>
            </select>

            <button>Search Jobs</button>
          </div>
        </div>

      </section>


      {/* ================= JOB SECTION ================= */}
      <section className="jobs-section">

        <div className="jobs-container">

          <div className="jobs-heading">
            <div>
              <span>CAREER OPPORTUNITIES</span>
              <h2>Featured Jobs</h2>
            </div>

            <p>
              Find the right opportunity and take the next step
              in your professional journey.
            </p>
          </div>


          {/* FILTERS */}
          <div className="job-filters">

            <button className="active-filter">
              All Jobs
            </button>

            <button>Technology</button>
            <button>Marketing</button>
            <button>Design</button>
            <button>Human Resources</button>
            <button>Customer Service</button>

          </div>


          {/* JOB CARDS */}
          <div className="jobs-grid">

            {jobs.map((job, index) => (

              <div className="job-card" key={index}>

                <div className="job-card-top">

                  <div className="company-logo">
                    NYC
                  </div>

                  <span className="job-type">
                    {job.type}
                  </span>

                </div>


                <h3>{job.title}</h3>

                <h4>{job.company}</h4>

                <div className="job-info">

                  <span>📍 {job.location}</span>

                  <span>💼 {job.category}</span>

                </div>


                <div className="job-bottom">

                  <strong>{job.salary}</strong>

                  <button>
                    View Job
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* LOAD MORE */}
          <div className="load-more">
            <button>
              View All Jobs →
            </button>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="career-cta">

        <div>
          <span>READY FOR YOUR NEXT STEP?</span>

          <h2>
            Build Skills.
            <br />
            Build Confidence.
          </h2>

          <p>
            Not sure where to start? NYC can help you become
            job-ready with professional training and career support.
          </p>

          <button>
            Get Career Support →
          </button>
        </div>

      </section>

    </div>
  );
}

export default ExploreCareers;