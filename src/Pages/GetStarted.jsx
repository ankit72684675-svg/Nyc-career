import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./GetStarted.css";

const pathways = [
  {
    label: "For candidates",
    title: "Find work that moves you forward.",
    description:
      "Explore opportunities, build practical skills, and get closer to a career that fits your goals.",
    action: "Explore jobs",
    to: "/jobs",
    number: "01",
  },
  {
    label: "For employers",
    title: "Meet the talent behind tomorrow.",
    description:
      "Tell us what your team needs and let NYC help you connect with capable, motivated people.",
    action: "Talk to our team",
    to: "/contact",
    number: "02",
  },
];

function GetStarted() {
  return (
    <div className="started-page">
      <Navbar />

      <main>
        <section className="started-hero" aria-labelledby="started-heading">
          <div className="started-hero-inner">
            <div>
              <span className="started-eyebrow">Begin your next chapter</span>
              <h1 id="started-heading">Let&apos;s find the right direction.</h1>
              <p>
                Whether you are building your career or building your team,
                you are in the right place to take the next step.
              </p>
            </div>
            <div className="started-compass" aria-hidden="true">
              <span className="started-compass-ring started-compass-ring-outer"></span>
              <span className="started-compass-ring started-compass-ring-inner"></span>
              <span className="started-compass-cross started-compass-cross-horizontal"></span>
              <span className="started-compass-cross started-compass-cross-vertical"></span>
              <span className="started-compass-point"></span>
            </div>
          </div>
        </section>

        <section className="started-pathways" aria-labelledby="pathways-heading">
          <div className="started-section-heading">
            <span className="started-section-label">Choose your path</span>
            <h2 id="pathways-heading">Where would you like to begin?</h2>
          </div>

          <div className="started-pathway-grid">
            {pathways.map((pathway) => (
              <article className="started-pathway" key={pathway.number}>
                <span className="started-number">{pathway.number}</span>
                <div>
                  <p className="started-pathway-label">{pathway.label}</p>
                  <h3>{pathway.title}</h3>
                  <p className="started-pathway-description">
                    {pathway.description}
                  </p>
                  <Link className="started-pathway-link" to={pathway.to}>
                    {pathway.action} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default GetStarted;
