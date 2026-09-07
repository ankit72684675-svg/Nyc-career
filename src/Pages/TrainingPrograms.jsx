
import "./TrainingPrograms.css";
import { Link } from "react-router-dom";
function TrainingPrograms() {
  return (
    <section className="final-cta">

      <div className="cta-content">

        <p className="cta-tagline">
          YOUR NEXT OPPORTUNITY STARTS HERE
        </p>

        <h2>
          Ready to Build Your Career?
        </h2>

        <p className="cta-description">
          Whether you're starting your career or looking for the
          right talent, NYC is here to help you move forward.
        </p>

        <div className="cta-buttons">

          <Link className="cta-primary" to="/ExploreCareer">
            Explore Careers →
          </Link>

          <Link className="cta-secondary" to="/hire-talent">
            Hire Talent →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default TrainingPrograms;