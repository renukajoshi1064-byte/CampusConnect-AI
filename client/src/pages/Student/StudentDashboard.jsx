import "./StudentDashboard.css";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  User,
  Bell,
  Search,
  ChevronDown,
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Clock3,
  CheckCircle2,
  CircleAlert,
  GraduationCap,
  LogOut,
  Sparkles,
} from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <main className="student-dashboard">

      {/* Sidebar */}

      <aside className="student-sidebar">

        <div className="dashboard-logo">

          <div className="dashboard-logo-icon">
            <GraduationCap size={25} />
          </div>

          <div>
            <h2>
              CampusConnect <span>AI</span>
            </h2>

            <p>Student Portal</p>
          </div>

        </div>

        <nav className="sidebar-menu">

          <button className="sidebar-link active">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

         <button
  className="sidebar-link"
  onClick={() =>
    navigate("/student/campus-drives")
  }
>
  <BriefcaseBusiness size={20} />

  Campus Drives
</button>

          <button className="sidebar-link">
            <FileText size={20} />
            My Applications
          </button>

          <button className="sidebar-link">
            <User size={20} />
            My Profile
          </button>

        </nav>

        <div className="sidebar-bottom">

          <div className="student-mini-profile">

            <div className="student-avatar">
              RJ
            </div>

            <div>
              <h4>Renuka Joshi</h4>
              <p>IT Engineering</p>
            </div>

            <ChevronDown size={17} />

          </div>

          <button className="logout-button">
            <LogOut size={19} />
            Log Out
          </button>

        </div>

      </aside>

      {/* Main content */}

      <section className="dashboard-main">

        {/* Top header */}

        <header className="dashboard-header">

          <div className="header-search">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search campus drives..."
            />

          </div>

          <div className="header-actions">

            <button className="notification-button">

              <Bell size={21} />

              <span></span>

            </button>

            <div className="header-avatar">
              RJ
            </div>

          </div>

        </header>

        {/* Dashboard content */}

        <div className="dashboard-content">

          {/* Welcome */}

          <section className="welcome-section">

            <div>

              <span className="welcome-tag">
                <Sparkles size={15} />
                STUDENT DASHBOARD
              </span>

              <h1>
                Good morning, Renuka 👋
              </h1>

              <p>
                Here is an overview of your placement journey.
              </p>

            </div>

            <button className="explore-drives-button">

              Explore Drives

              <ArrowUpRight size={19} />

            </button>

          </section>

          {/* Statistics */}

          <section className="dashboard-stats">

            <article className="stat-card applications-stat">

              <div className="stat-icon">
                <FileText size={22} />
              </div>

              <div>

                <p>Applications</p>

                <h2>08</h2>

                <span>
                  +2 this month
                </span>

              </div>

            </article>

            <article className="stat-card shortlisted-stat">

              <div className="stat-icon">
                <CheckCircle2 size={22} />
              </div>

              <div>

                <p>Shortlisted</p>

                <h2>03</h2>

                <span>
                  Great progress!
                </span>

              </div>

            </article>

            <article className="stat-card interviews-stat">

              <div className="stat-icon">
                <CalendarDays size={22} />
              </div>

              <div>

                <p>Upcoming Interviews</p>

                <h2>02</h2>

                <span>
                  Next: 28 July
                </span>

              </div>

            </article>

            <article className="stat-card profile-stat">

              <div className="stat-icon">
                <User size={22} />
              </div>

              <div>

                <p>Profile Completion</p>

                <h2>85%</h2>

                <span>
                  Add skills to improve
                </span>

              </div>

            </article>

          </section>

          {/* Bottom dashboard grid */}

          <section className="dashboard-grid">

            {/* Upcoming drives */}

            <article className="dashboard-panel drives-panel">

              <div className="panel-heading">

                <div>

                  <h2>
                    Upcoming Campus Drives
                  </h2>

                  <p>
                    Opportunities matching your profile
                  </p>

                </div>

                <button>
                  View All
                </button>

              </div>

              <div className="drive-list">

                <div className="drive-item">

                  <div className="company-logo google-logo">
                    G
                  </div>

                  <div className="drive-details">

                    <h3>
                      Software Engineer Intern
                    </h3>

                    <p>
                      Google · Pune
                    </p>

                    <div>

                      <span>
                        <CalendarDays size={14} />
                        30 July
                      </span>

                      <span>
                        <Clock3 size={14} />
                        10:00 AM
                      </span>

                    </div>

                  </div>

                  <button className="apply-button">
                    Apply
                  </button>

                </div>

                <div className="drive-item">

                  <div className="company-logo microsoft-logo">
                    M
                  </div>

                  <div className="drive-details">

                    <h3>
                      Frontend Developer
                    </h3>

                    <p>
                      Microsoft · Hybrid
                    </p>

                    <div>

                      <span>
                        <CalendarDays size={14} />
                        02 August
                      </span>

                      <span>
                        <MapPin size={14} />
                        Pune
                      </span>

                    </div>

                  </div>

                  <button className="apply-button">
                    Apply
                  </button>

                </div>

                <div className="drive-item">

                  <div className="company-logo infosys-logo">
                    I
                  </div>

                  <div className="drive-details">

                    <h3>
                      Systems Engineer
                    </h3>

                    <p>
                      Infosys · Pune
                    </p>

                    <div>

                      <span>
                        <CalendarDays size={14} />
                        05 August
                      </span>

                      <span>
                        <Clock3 size={14} />
                        11:30 AM
                      </span>

                    </div>

                  </div>

                  <button className="apply-button">
                    Apply
                  </button>

                </div>

              </div>

            </article>

            {/* Right side */}

            <div className="dashboard-right-column">

              {/* Profile completion */}

              <article className="profile-card">

                <div className="profile-card-top">

                  <div>

                    <span>
                      PROFILE STRENGTH
                    </span>

                    <h2>
                      Almost there! 🚀
                    </h2>

                  </div>

                  <CircleAlert size={22} />

                </div>

                <p>
                  Complete your profile to get better
                  campus drive recommendations.
                </p>

                <div className="profile-progress">

                  <div className="progress-label">

                    <span>Profile completed</span>

                    <strong>85%</strong>

                  </div>

                  <div className="progress-track">

                    <div className="progress-fill"></div>

                  </div>

                </div>

                <button>
                  Complete Profile
                  <ArrowUpRight size={17} />
                </button>

              </article>

              {/* Application status */}

              <article className="application-card">

                <div className="panel-heading">

                  <div>

                    <h2>
                      Application Status
                    </h2>

                    <p>
                      Your latest applications
                    </p>

                  </div>

                </div>

                <div className="application-status-list">

                  <div>

                    <span className="status-company">
                      T
                    </span>

                    <div>

                      <h4>
                        TCS
                      </h4>

                      <p>
                        Ninja Role
                      </p>

                    </div>

                    <span className="status-badge shortlisted">
                      Shortlisted
                    </span>

                  </div>

                  <div>

                    <span className="status-company">
                      A
                    </span>

                    <div>

                      <h4>
                        Accenture
                      </h4>

                      <p>
                        Associate Software Engineer
                      </p>

                    </div>

                    <span className="status-badge reviewing">
                      Reviewing
                    </span>

                  </div>

                </div>

              </article>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
};

export default StudentDashboard;