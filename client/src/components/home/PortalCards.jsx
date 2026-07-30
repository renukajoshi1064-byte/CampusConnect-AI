import "./PortalCards.css";
import { useNavigate } from "react-router-dom";

import {
  GraduationCap,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import studentImage from "../../assets/images/student-portal.png";
import recruiterImage from "../../assets/images/recruiter-portal.png";
import adminImage from "../../assets/images/admin-portal.png";

const PortalCards = () => {
  const navigate = useNavigate();
  return (
    <section className="portal-section">

      <div className="portal-grid">

        {/* Student Card */}

        <article className="portal-card student-portal">

          <div className="portal-top">

            <div className="portal-icon student-icon">
              <GraduationCap size={30} />
            </div>

            <img
              src={studentImage}
              alt="Student using campus placement portal"
              className="portal-illustration"
            />

          </div>

          <div className="portal-content">

            <h2>Student Portal</h2>

            <p>
              Explore campus opportunities, apply for drives,
              track applications, and manage your profile.
            </p>

            <div className="portal-features">

              <span>Browse Campus Drives</span>

              <span>Track Application Status</span>

              <span>AI Resume Analyzer</span>

            </div>

          </div>

         <button
  className="portal-button"
  onClick={() => navigate("/student-login")}
>
  Enter as Student

  <ArrowRight size={19} />
</button>

        </article>

        {/* Recruiter Card */}

        <article className="portal-card recruiter-portal">

          <div className="portal-top">

            <div className="portal-icon recruiter-icon">
              <Building2 size={30} />
            </div>

            <img
              src={recruiterImage}
              alt="Recruiter managing candidates"
              className="portal-illustration"
            />

          </div>

          <div className="portal-content">

            <h2>Recruiter Portal</h2>

            <p>
              Create hiring drives, review applications,
              shortlist skilled candidates, and manage recruitment.
            </p>

            <div className="portal-features">

              <span>Create Campus Drives</span>

              <span>Review Candidates</span>

              <span>Manage Interviews</span>

            </div>

          </div>

          <button className="portal-button">
            Enter as Recruiter
            <ArrowRight size={19} />
          </button>

        </article>

        {/* Admin Card */}

        <article className="portal-card admin-portal">

          <div className="portal-top">

            <div className="portal-icon admin-icon">
              <ShieldCheck size={30} />
            </div>

           <img
  src={adminImage}
  alt="Admin managing the campus recruitment platform"
  className="portal-illustration"
/>

          </div>

          <div className="portal-content">

            <h2>Admin Portal</h2>

            <p>
              Manage users, approve companies, monitor drives,
              and control the complete placement system.
            </p>

            <div className="portal-features">

              <span>Manage Students</span>

              <span>Approve Companies</span>

              <span>View Placement Reports</span>

            </div>

          </div>

          <button className="portal-button">
            Enter as Admin
            <ArrowRight size={19} />
          </button>

        </article>

      </div>

    </section>
  );
};

export default PortalCards;