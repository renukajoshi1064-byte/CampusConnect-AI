import "./Stats.css";
import { Users, BriefcaseBusiness, Building2, Award } from "lucide-react";

const Stats = () => {
  return (
    <section className="stats-section">

      <div className="stats-header">

        <span className="stats-badge">Platform Insights</span>

        <h2>Trusted by Students & Recruiters</h2>

        <p>
          CampusConnect AI simplifies campus placements through one
          intelligent recruitment platform.
        </p>

      </div>

      <div className="stats-container">

        <div className="stat-card">

          <Users size={42} className="stat-icon"/>

          <h3>10,000+</h3>

          <p>Students Registered</p>

        </div>

        <div className="stat-card">

          <BriefcaseBusiness size={42} className="stat-icon"/>

          <h3>250+</h3>

          <p>Campus Drives</p>

        </div>

        <div className="stat-card">

          <Building2 size={42} className="stat-icon"/>

          <h3>150+</h3>

          <p>Recruiters</p>

        </div>

        <div className="stat-card">

          <Award size={42} className="stat-icon"/>

          <h3>95%</h3>

          <p>Placement Success</p>

        </div>

      </div>

    </section>
  );
};

export default Stats;