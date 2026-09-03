
import "./FinalCTA.css";
import "./Footer.css";
function FinalCTA() {
  return (
   <footer className="footer">

  <div className="footer-container">

    {/* LOGO */}

    <div className="footer-about">

      <div className="footer-logo">
        <img src="logo.png" alt="NYC Logo" />

        <div>
          <h3>NYC</h3>
          <p>Navigate Your Career</p>
        </div>
      </div>

      <p>
        Empowering individuals with skills, confidence and
        opportunities to build a stronger career.
      </p>

    </div>


    {/* QUICK LINKS */}

    <div className="footer-links">

      <h3>Quick Links</h3>

      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Training Programs</a>

    </div>


    {/* CANDIDATES */}

    <div className="footer-links">

      <h3>For Candidates</h3>

      <a href="#">Explore Jobs</a>
      <a href="#">Training</a>
      <a href="#">Interview Preparation</a>
      <a href="#">Career Guidance</a>

    </div>


    {/* CONTACT */}

    <div className="footer-links">

      <h3>Contact Us</h3>

      <p>📍 India</p>
      <p>📞 +91 XXXXX XXXXX</p>
      <p>✉️ info@nyc.com</p>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 NYC. All Rights Reserved.
    </p>

    <div>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>

  </div>

</footer>

  );
}

export default FinalCTA;