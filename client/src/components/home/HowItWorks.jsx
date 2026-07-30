import "./HowItWorks.css";
import { UserPlus, BriefcaseBusiness, GraduationCap } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="how-section">

      <div className="how-header">

        <span className="how-badge">How It Works</span>

        <h2>Campus Recruitment Made Simple</h2>

        <p>
          CampusConnect AI simplifies the recruitment process for students,
          recruiters, and placement officers through three simple steps.
        </p>

      </div>

      <div className="how-container">

        <div className="how-card">

          <div className="step-number">01</div>

          <div className="how-icon">
            <UserPlus size={34}/>
          </div>

          <h3>Student Registers</h3>

          <p>
            Create your profile, upload your resume and apply for campus drives.
          </p>

        </div>

        <div className="arrow">→</div>

        <div className="how-card">

          <div className="step-number">02</div>

          <div className="how-icon">
            <BriefcaseBusiness size={34}/>
          </div>

          <h3>Recruiter Shortlists</h3>

          <p>
            Recruiters review applications and schedule interviews with eligible students.
          </p>

        </div>

        <div className="arrow">→</div>

        <div className="how-card">

          <div className="step-number">03</div>

          <div className="how-icon">
            <GraduationCap size={34}/>
          </div>

          <h3>Placement Success</h3>

          <p>
            Admin monitors the recruitment process and publishes final placement results.
          </p>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;