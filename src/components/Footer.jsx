// import "./Footer.css";

  function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Navigate Your Career</h3>

          <p>
            Helping individuals build skills, confidence and better career
            opportunities.
          </p>

          <p className="footer-tagline">
            Talent & Career Solutions
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Training</a>
          <a href="#">Jobs</a>
          <a href="#">Contact</a>
        </div>

        {/* For Candidates */}
        <div className="footer-column">
          <h4>For Candidates</h4>

          <a href="#">Explore Careers</a>
          <a href="#">Training Programs</a>
          <a href="#">Interview Preparation</a>
          <a href="#">Success Stories</a>
        </div>

        {/* For Employers */}
        <div className="footer-column">
          <h4>For Employers</h4>

          <a href="#">Hire Talent</a>
          <a href="#">Post a Job</a>
          <a href="#">Find Candidates</a>
          <a href="#">Employer Login</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} NYC — Navigate Your Career.
          All rights reserved.
        </p>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;