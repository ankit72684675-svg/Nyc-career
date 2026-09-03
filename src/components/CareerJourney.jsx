import "./CareerJourney.css";


function CareerJourney() {
  return (
    <section className="career-journey">

      <div className="journey-heading">

        <div className="journey-tagline">
          <span>—</span>
          FROM POTENTIAL TO OPPORTUNITY
          <span>—</span>
        </div>
        <h2>Your Career Journey with NYC</h2>

        <p>
          A clear path to become job-ready and grow in your career.
        </p>

      </div>

      <div className="journey-container">

        {/* CARD 1 */}
        <div className="journey-card">
          <div className="step-number">01</div>

          <div className="journey-icon">
            📖
          </div>

          <h3>Learn</h3>

          <p>
            Gain knowledge and build strong professional foundations.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="journey-card">
          <div className="step-number">02</div>

          <div className="journey-icon">
            🎓
          </div>

          <h3>Prepare</h3>

          <p>
            Improve English, communication and personality to become job-ready.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="journey-card">
          <div className="step-number">03</div>

          <div className="journey-icon">
            👨‍🏫
          </div>

          <h3>Practice</h3>

          <p>
            Prepare for interviews with mock sessions and career guidance.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="journey-card">
          <div className="step-number">04</div>

          <div className="journey-icon">
            👥
          </div>

          <h3>Connect</h3>

          <p>
            Discover relevant jobs and connect with the right employers.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="journey-card">
          <div className="step-number">05</div>

          <div className="journey-icon">
            📈
          </div>

          <h3>Grow</h3>

          <p>
            Move from opportunity to success and career growth.
          </p>
        </div>

      </div>

    </section>
  );
}

export default CareerJourney;