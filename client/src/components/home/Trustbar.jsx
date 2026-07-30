import "./TrustBar.css";
import {
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const TrustBar = () => {
  return (
    <section className="trust-section">

      <div className="trust-bar">

        <div className="trust-item">

          <div className="trust-icon secure-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h3>Secure & Trusted</h3>

            <p>
              Your information is protected
            </p>
          </div>

        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">

          <div className="trust-icon smart-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <h3>Smart Recruitment</h3>

            <p>
              AI-powered matching and insights
            </p>
          </div>

        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">

          <div className="trust-icon growth-icon">
            <TrendingUp size={22} />
          </div>

          <div>
            <h3>Better Outcomes</h3>

            <p>
              Faster hiring and stronger placements
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default TrustBar;