import React, { useMemo, useState } from "react";
import "./Jobs.css";

import Navbar from "../components/navbar";
import Footer from "../components/FinalCTA";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Infosys",
    location: "Pune",
    experience: "2-4 Years",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "₹5 - ₹9 LPA",
    industry: "IT & Technology",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    posted: "Recently posted",
    applyLink: "https://www.infosys.com/careers/apply.html",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "TCS",
    location: "Bengaluru",
    experience: "1-3 Years",
    type: "Full Time",
    workMode: "On-site",
    salary: "₹4.5 - ₹8 LPA",
    industry: "IT & Technology",
    skills: ["Java", "Spring Boot", "SQL"],
    posted: "Recently posted",
    applyLink: "https://www.tcs.com/careers",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Business Analyst",
    company: "Accenture",
    location: "Mumbai",
    experience: "2-5 Years",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "₹6 - ₹11 LPA",
    industry: "Consulting",
    skills: ["Business Analysis", "Excel", "SQL"],
    posted: "Recently posted",
    applyLink: "https://www.accenture.com/in-en/careers",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    company: "Wipro",
    location: "Hyderabad",
    experience: "0-2 Years",
    type: "Full Time",
    workMode: "On-site",
    salary: "₹3 - ₹5.5 LPA",
    industry: "Marketing",
    skills: ["SEO", "Social Media", "Google Ads"],
    posted: "Recently posted",
    applyLink: "https://careers.wipro.com/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Customer Support Executive",
    company: "Concentrix",
    location: "Noida",
    experience: "0-2 Years",
    type: "Full Time",
    workMode: "On-site",
    salary: "₹2.5 - ₹4 LPA",
    industry: "Customer Service",
    skills: ["Communication", "English", "Customer Support"],
    posted: "Recently posted",
    applyLink: "https://jobs.concentrix.com/job-search/?country=India",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "HR Executive",
    company: "Genpact",
    location: "Gurugram",
    experience: "1-3 Years",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "₹3.5 - ₹6 LPA",
    industry: "Human Resources",
    skills: ["Recruitment", "HR Operations", "Communication"],
    posted: "Recently posted",
    applyLink: "https://www.genpact.com/careers",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
];

const locations = ["All", "Pune", "Bengaluru", "Mumbai", "Hyderabad", "Noida", "Gurugram"];
const industries = [
  "All",
  "IT & Technology",
  "Consulting",
  "Marketing",
  "Customer Service",
  "Human Resources",
];
const workModes = ["All", "Remote", "Hybrid", "On-site"];

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [workMode, setWorkMode] = useState("All");
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase().trim();

    return jobsData.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.skills.some((skill) => skill.toLowerCase().includes(query));

      const matchesLocation = location === "All" || job.location === location;
      const matchesIndustry = industry === "All" || job.industry === industry;
      const matchesWorkMode = workMode === "All" || job.workMode === workMode;

      return matchesSearch && matchesLocation && matchesIndustry && matchesWorkMode;
    });
  }, [search, location, industry, workMode]);

  const toggleSaveJob = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setLocation("All");
    setIndustry("All");
    setWorkMode("All");
  };

  return (
    <>
      <Navbar />

      <main className="jobs-page">
        {/* HERO */}
        <section className="jobs-hero">
          <div className="hero-overlay"></div>

          <div className="jobs-container hero-content">
            <span className="hero-badge">CAREERS • OPPORTUNITIES • GROWTH</span>

            <h1>
              Find a job you'll
              <span> love to build.</span>
            </h1>

            <p>
              Search thousands of opportunities and discover your next career
              move with companies that are hiring.
            </p>

            <div className="hero-stats">
              <div>
                <strong>{jobsData.length}+</strong>
                <span>Featured Jobs</span>
              </div>
              <div>
                <strong>{new Set(jobsData.map((j) => j.company)).size}</strong>
                <span>Companies</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Direct Apply</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="jobs-search-section">
          <div className="jobs-container">
            <div className="search-card">
              <div className="search-input-wrap">
                <span className="search-icon">⌕</span>
                <input
                  type="text"
                  placeholder="Search jobs, skills or companies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <button className="search-button" type="button">
                Search Jobs
              </button>
            </div>

            {/* FILTERS */}
            <div className="filter-row">
              <div className="filter-item">
                <label>Location</label>
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  {locations.map((item) => (
                    <option key={item} value={item}>
                      {item === "All" ? "All Locations" : item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-item">
                <label>Industry</label>
                <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                  {industries.map((item) => (
                    <option key={item} value={item}>
                      {item === "All" ? "All Industries" : item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-item">
                <label>Work Mode</label>
                <select value={workMode} onChange={(e) => setWorkMode(e.target.value)}>
                  {workModes.map((item) => (
                    <option key={item} value={item}>
                      {item === "All" ? "All Work Modes" : item}
                    </option>
                  ))}
                </select>
              </div>

              <button className="clear-button" onClick={clearFilters} type="button">
                Clear all
              </button>
            </div>
          </div>
        </section>

        {/* JOBS */}
        <section className="jobs-list-section">
          <div className="jobs-container">
            <div className="section-heading">
              <div>
                <span className="section-label">EXPLORE OPPORTUNITIES</span>
                <h2>Latest job opportunities</h2>
              </div>

              <div className="result-count">
                <strong>{filteredJobs.length}</strong>
                <span> jobs found</span>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="jobs-grid">
                {filteredJobs.map((job) => (
                  <article className="job-card" key={job.id}>
                    <div className="job-card-image">
                      <img src={job.image} alt={job.company} loading="lazy" />

                      <button
                        type="button"
                        className={`save-button ${savedJobs.includes(job.id) ? "saved" : ""}`}
                        onClick={() => toggleSaveJob(job.id)}
                        aria-label="Save job"
                      >
                        {savedJobs.includes(job.id) ? "★" : "☆"}
                      </button>

                      <div className="company-logo">{job.company.charAt(0)}</div>
                    </div>

                    <div className="job-body">
                      <div className="industry-tag">{job.industry}</div>

                      <h3>{job.title}</h3>
                      <p className="company-name">{job.company}</p>

                      <div className="job-details">
                        <span>
                          <b>⌖</b>
                          {job.location}
                        </span>
                        <span>
                          <b>◷</b>
                          {job.experience}
                        </span>
                        <span>
                          <b>▣</b>
                          {job.workMode}
                        </span>
                      </div>

                      <div className="salary">{job.salary}</div>

                      <div className="skills">
                        {job.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="job-card-footer">
                      <span className="posted">{job.posted}</span>

                      <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apply-button"
                      >
                        View & Apply
                        <span>↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-jobs">
                <div className="no-jobs-icon">⌕</div>
                <h3>No jobs found</h3>
                <p>Try a different keyword or remove some filters.</p>
                <button type="button" onClick={clearFilters}>
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="jobs-cta">
          <div className="jobs-container">
            <div className="cta-content">
              <span className="section-label">START YOUR NEXT CHAPTER</span>
              <h2>
                Your next opportunity
                <br />
                could be one click away.
              </h2>
              <p>
                Explore company career pages and apply directly to the
                opportunities that match your skills.
              </p>
            </div>

            <a
              href="https://www.infosys.com/careers/apply.html"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Explore Jobs
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Jobs;
