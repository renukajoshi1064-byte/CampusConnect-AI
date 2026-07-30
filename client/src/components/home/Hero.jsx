import "./Hero.css";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="hero-content">

        <div className="hero-badge">
          <span className="badge-dot"></span>
          Smart Campus Recruitment Platform
        </div>

        <h1 className="hero-title">
          Your Future Starts
          <br />

          <span className="title-blue">With the Right</span>{" "}

          <span className="title-purple">
            Opportunity
          </span>
        </h1>

        <p className="hero-description">
          Connect with opportunities, discover your potential, and build
          meaningful careers through one intelligent campus recruitment
          platform.
        </p>

        <div className="hero-buttons">

          <button className="hero-primary-btn">
            Get Started
            <ArrowRight size={19} />
          </button>

          <button className="hero-secondary-btn">
            <span className="play-icon">
              <Play size={14} fill="currentColor" />
            </span>

            Explore Platform
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;