import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="login-page">
      <Navbar />

      <main className="login-main">
        <section className="login-intro" aria-labelledby="login-heading">
          <span className="login-eyebrow">Welcome back</span>
          <h1 id="login-heading">Your next opportunity starts here.</h1>
          <p>
            Sign in to keep your career journey moving, manage your profile,
            and discover roles that match your ambitions.
          </p>
          <div className="login-route" aria-hidden="true">
            <span className="login-route-line"></span>
            <span className="login-route-point login-route-point-start"></span>
            <span className="login-route-point login-route-point-end"></span>
          </div>
          <p className="login-note">Learn. Prepare. Connect. Grow.</p>
        </section>

        <section className="login-panel" aria-label="Sign in form">
          <div className="login-panel-heading">
            <p className="login-panel-kicker">Candidate portal</p>
            <h2>Sign in to NYC</h2>
            <p>Use your account details to continue.</p>
          </div>

          {submitted && (
            <div className="login-success" role="status">
              Thanks. Your sign-in request has been received.
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="login-email">Email address</label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="login-password">Password</label>
                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-pressed={showPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-option">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <a href="#forgot-password">Forgot password?</a>
            </div>

            <button className="login-submit" type="submit">
              Sign in
              <span aria-hidden="true">&rarr;</span>
            </button>
          </form>

          <p className="login-signup">
            New to Navigate Your Career? <Link to="/contact">Get in touch</Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Login;
