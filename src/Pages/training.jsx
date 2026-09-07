
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/FinalCTA";
import "./training.css";

// =========================
// Training Courses
// =========================
const courses = [
  {
    title: "Job Ready Program",
    description:
      "A complete career-readiness program designed to help candidates become professionally prepared for employment.",
    duration: "8 Weeks",
    level: "Beginner",
    category: "Career Focused",
    tag: "Career Readiness",
    price: "₹6,999",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    alt: "Professionals collaborating during a career training session",
  },
  {
    title: "Professional English",
    description:
      "Improve spoken English, workplace communication and professional confidence.",
    duration: "6 Weeks",
    level: "Beginner",
    category: "Communication",
    tag: "Communication",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    alt: "Students participating in a professional communication session",
  },
  {
    title: "Personality Development",
    description:
      "Develop confidence, professional presence, communication and interpersonal skills.",
    duration: "6 Weeks",
    level: "All Levels",
    category: "Confidence Building",
    tag: "Confidence",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800&q=80",
    alt: "Professional presenting confidently to a group",
  },
  {
    title: "Interview Preparation",
    description:
      "Learn how to approach interviews with confidence and prepare effective responses.",
    duration: "4 Weeks",
    level: "Intermediate",
    category: "Career Focused",
    tag: "Interview Skills",
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&q=80",
    alt: "Candidate preparing for a professional interview",
  },
  {
    title: "Workplace Communication",
    description:
      "Build communication skills needed to interact effectively in professional environments.",
    duration: "5 Weeks",
    level: "Beginner",
    category: "Communication",
    tag: "Workplace Skills",
    price: "₹4,499",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    alt: "Colleagues discussing a project in a modern workplace",
  },
  {
    title: "Resume & LinkedIn Mastery",
    description:
      "Improve your resume and LinkedIn profile to present your professional profile effectively.",
    duration: "2 Weeks",
    level: "All Levels",
    category: "Personal Branding",
    tag: "Personal Branding",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    alt: "Professional working on a resume using a laptop",
  },
  {
    title: "Mock Interview Program",
    description:
      "Practice interview situations and improve your confidence before the real interview.",
    duration: "3 Weeks",
    level: "Intermediate",
    category: "Career Focused",
    tag: "Practice",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    alt: "Two professionals conducting a mock interview",
  },
];

// =========================
// Features
// =========================
const features = [
  {
    title: "Practical Learning",
    description:
      "Learn skills that can be applied in real professional situations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M8 30V14L20 8L32 14V30"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 30V20H26V30"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Career Focused",
    description:
      "Training is designed around employability and career readiness.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle
          cx="20"
          cy="14"
          r="6"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 32C8 25.4 13.4 21 20 21C26.6 21 32 25.4 32 32"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Confidence Building",
    description:
      "Develop the confidence needed for communication and interviews.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 6L24.5 15.2L34.7 16.7L27.3 23.8L29 34L20 29L11 34L12.7 23.8L5.3 16.7L15.5 15.2L20 6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "From Training to Opportunity",
    description:
      "After becoming job-ready, candidates can move toward relevant career opportunities.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M6 26L16 16L22 22L34 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 10H34V19"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// =========================
// Learning Journey
// =========================
const journeySteps = [
  {
    number: "01",
    title: "Learn",
    description: "Build professional and communication skills.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Prepare your resume, LinkedIn profile and career goals.",
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Take mock interviews and practice professional situations.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Move toward relevant job and employer opportunities.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Continue developing your career and professional skills.",
  },
];

// =========================
// Training Includes
// =========================
const includes = [
  "Professional Communication",
  "Spoken English",
  "Personality Development",
  "Interview Preparation",
  "Mock Interviews",
  "Resume Development",
  "LinkedIn Profile Development",
  "Career Guidance",
  "Workplace Skills",
];

// =========================
// Training Component
// =========================
export default function Training() {
  return (
    <>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__content">
              <p className="eyebrow">NYC Training Academy</p>

              <h1 className="hero__heading">
                Build Skills. Build Confidence. Build Your Career.
              </h1>

              <p className="hero__desc">
                Practical training designed to make you job-ready,
                confident and prepared for real career opportunities.
              </p>

              <div className="hero__actions">
                <a href="#programs" className="btn btn--primary">
                  Explore Programs
                </a>

                <a href="/get-started" className="btn btn--outline">
                  Get Started
                </a>
              </div>
            </div>

            <div className="hero__media">
              <div className="hero__image-frame">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional trainer guiding a career-readiness workshop"
                  className="hero__image"
                />
              </div>

              <div className="hero__float-card">
                <span className="hero__float-title">
                  Job Ready Training
                </span>

                <span className="hero__float-sub">
                  Practical, professional, career focused
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="intro">
          <div className="intro__inner">
            <div className="intro__text">
              <h2>
                Training That Takes You From Potential to Opportunity
              </h2>

              <p>
                NYC helps candidates strengthen communication,
                professional skills and confidence long before an
                interview begins. Every program is built around real
                workplace situations, so what you practice here is what
                employers actually expect on day one.
              </p>
            </div>

            <div className="intro__stats">
              <div className="stat">
                <span className="stat__value">7+</span>
                <span className="stat__label">
                  Career Programs
                </span>
              </div>

              <div className="stat">
                <span className="stat__value">100%</span>
                <span className="stat__label">
                  Career Focused
                </span>
              </div>

              <div className="stat">
                <span className="stat__value">Practical</span>
                <span className="stat__label">
                  Learning Approach
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS ================= */}
        <section className="programs" id="programs">
          <div className="section-heading">
            <h2>Explore Our Training Programs</h2>

            <p>
              Choose the right program to develop the skills you need
              for your next career opportunity.
            </p>
          </div>

          <div className="programs__grid">
            {courses.map((course) => (
              <article
                className="course-card"
                key={course.title}
              >
                <div className="course-card__image">
                  <img
                    src={course.image}
                    alt={course.alt}
                    loading="lazy"
                  />

                  <span className="course-card__tag">
                    {course.tag}
                  </span>
                </div>

                <div className="course-card__body">
                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <ul className="course-card__meta">
                    <li>{course.duration}</li>
                    <li>{course.level}</li>
                    <li>{course.category}</li>
                  </ul>

                  <div className="course-card__footer">
                    <span className="course-card__price">
                      {course.price}
                    </span>

                    <a href="#" className="btn btn--ghost">
                      View Program
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= WHY NYC ================= */}
        <section className="why">
          <div className="section-heading section-heading--light">
            <h2>Why Choose NYC Training?</h2>
          </div>

          <div className="why__grid">
            {features.map((feature) => (
              <div className="feature" key={feature.title}>
                <span className="feature__icon">
                  {feature.icon}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= JOURNEY ================= */}
        <section className="journey">
          <div className="section-heading">
            <h2>Your Journey to Career Readiness</h2>
          </div>

          <ol className="journey__timeline">
            {journeySteps.map((step) => (
              <li
                className="journey__step"
                key={step.number}
              >
                <span className="journey__number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ================= INCLUDES ================= */}
        <section className="includes">
          <div className="includes__inner">
            <div className="includes__image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
                alt="Career trainer working with a candidate"
                loading="lazy"
              />
            </div>

            <div className="includes__content">
              <h2>
                Everything You Need to Become Job-Ready
              </h2>

              <ul className="checklist">
                {includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta">
          <div className="cta__inner">
            <h2>
              Ready to Take the Next Step in Your Career?
            </h2>

            <p>
              Start developing the skills, confidence and
              professional readiness needed for your next
              opportunity.
            </p>

            <div className="cta__actions">
              <a href="#programs" className="btn btn--gold">
                Explore Training
              </a>

              <a href="/jobs" className="btn btn--outline-light">
                Find Jobs
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
