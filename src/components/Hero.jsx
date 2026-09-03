import heroImage from "../../nyc.png";
import "./hero.css";

function Hero() {
  return (
    <main
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">

        <h3 className="hero-tagline">
          WELCOME TO NYC
        </h3>

        <h1>
          Navigate Your Career.<br />
          Build Skills. Build Confidence.<br />
          Build Your Career.
        </h1>

        <p className="hero-description">
          NYC helps individuals become job-ready through professional
          training, communication development and interview preparation.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Careers
          </button>

          <button className="secondary-btn">
            Hire Talent
          </button>

        </div>

        <div className="hero-stats">

          <div className="hero-stat">
            <div className="stat-icon">🎓</div>
            <div>
              <h4>Career Training</h4>
              <p>Job-ready Programs</p>
            </div>
          </div>

          <div className="hero-stat">
            <div className="stat-icon">👥</div>
            <div>
              <h4>1000+ Candidates</h4>
              <p>Trained Candidates</p>
            </div>
          </div>

          <div className="hero-stat">
            <div className="stat-icon">⭐</div>
            <div>
              <h4>Industry Experts</h4>
              <p>Guiding Your Journey</p>
            </div>
          </div>

          <div className="hero-stat">
            <div className="stat-icon">💼</div>
            <div>
              <h4>Better Opportunities</h4>
              <p>Stronger Future</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Hero;