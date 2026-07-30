import {
  GraduationCap,
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  User,
  Bell,
  LogOut,
  Search,
  ChevronDown,
  MapPin,
  CalendarDays,
  Eye,
  Clock3,
  CheckCircle2,
  ArrowRight,
  XCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./MyApplications.css";

const MyApplications = () => {
  const navigate = useNavigate();

  const applications = [
    {
      company: "Google",
      logo: "G",
      logoClass: "google-logo",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      appliedDate: "10 Aug 2026",
      status: "Shortlisted",
      statusClass: "shortlisted-status",
      icon: CheckCircle2,
    },
    {
      company: "Microsoft",
      logo: "M",
      logoClass: "microsoft-logo",
      role: "Software Development Engineer",
      location: "Hyderabad, India",
      appliedDate: "12 Aug 2026",
      status: "Under Review",
      statusClass: "review-status",
      icon: Clock3,
    },
    {
      company: "Infosys",
      logo: "I",
      logoClass: "infosys-logo",
      role: "Systems Engineer",
      location: "Pune, India",
      appliedDate: "14 Aug 2026",
      status: "Applied",
      statusClass: "applied-status",
      icon: FileText,
    },
    {
      company: "Accenture",
      logo: "A",
      logoClass: "accenture-logo",
      role: "Associate Software Engineer",
      location: "Mumbai, India",
      appliedDate: "16 Aug 2026",
      status: "Rejected",
      statusClass: "rejected-status",
      icon: XCircle,
    },
  ];

  return (
    <main className="applications-page">

      {/* SIDEBAR */}

      <aside className="applications-sidebar">

        <div className="dashboard-logo">

          <div className="dashboard-logo-icon">

            <GraduationCap size={25} />

          </div>

          <div>

            <h2>
              CampusConnect <span>AI</span>
            </h2>

            <p>
              Student Portal
            </p>

          </div>

        </div>


        <nav className="sidebar-menu">

          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student-dashboard")
            }
          >

            <LayoutDashboard size={19} />

            Dashboard

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student/drives")
            }
          >

            <BriefcaseBusiness size={19} />

            Campus Drives

          </button>


          <button className="sidebar-link active">

            <FileText size={19} />

            My Applications

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student/profile")
            }
          >

            <User size={19} />

            My Profile

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student/notifications")
            }
          >

            <Bell size={19} />

            Notifications

          </button>

        </nav>


        <div className="sidebar-bottom">

          <div className="student-mini-profile">

            <div className="student-avatar">

              RJ

            </div>

            <div>

              <h4>
                Student
              </h4>

              <p>
                IT Department
              </p>

            </div>

            <ChevronDown size={16} />

          </div>


          <button
            className="logout-button"
            onClick={() =>
              navigate("/student-login")
            }
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </aside>


      {/* MAIN SECTION */}

      <section className="applications-main">

        {/* HEADER */}

        <header className="applications-header">

          <div className="header-search">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search applications..."
            />

          </div>


          <div className="header-actions">

            <button
              className="notification-button"
              onClick={() =>
                navigate("/student/notifications")
              }
            >

              <Bell size={19} />

              <span></span>

            </button>


            <div className="header-avatar">

              RJ

            </div>

          </div>

        </header>


        {/* PAGE CONTENT */}

        <div className="applications-content">

          <section className="applications-heading">

            <div>

              <span className="page-tag">

                <FileText size={13} />

                APPLICATION TRACKER

              </span>


              <h1>
                My Applications
              </h1>


              <p>
                Track the status of all your campus drive applications.
              </p>

            </div>


            <button
              className="explore-drives-button"
              onClick={() =>
                navigate("/student/drives")
              }
            >

              <BriefcaseBusiness size={17} />

              Explore Drives

            </button>

          </section>


          {/* APPLICATION STATISTICS */}

          <section className="application-stats">

            <article className="application-stat-card">

              <div className="application-stat-icon total-icon">

                <FileText size={22} />

              </div>

              <div>

                <p>
                  Total Applications
                </p>

                <h2>
                  4
                </h2>

              </div>

            </article>


            <article className="application-stat-card">

              <div className="application-stat-icon review-icon">

                <Clock3 size={22} />

              </div>

              <div>

                <p>
                  Under Review
                </p>

                <h2>
                  1
                </h2>

              </div>

            </article>


            <article className="application-stat-card">

              <div className="application-stat-icon shortlisted-icon">

                <CheckCircle2 size={22} />

              </div>

              <div>

                <p>
                  Shortlisted
                </p>

                <h2>
                  1
                </h2>

              </div>

            </article>


            <article className="application-stat-card">

              <div className="application-stat-icon rejected-icon">

                <XCircle size={22} />

              </div>

              <div>

                <p>
                  Rejected
                </p>

                <h2>
                  1
                </h2>

              </div>

            </article>

          </section>


          {/* APPLICATION LIST */}

          <section className="applications-list-card">

            <div className="applications-list-heading">

              <div>

                <h2>
                  Application History
                </h2>

                <p>
                  View and track your submitted applications.
                </p>

              </div>

            </div>


            <div className="applications-list">

              {applications.map((application) => {
                 <article key={application.company}></article>

                const StatusIcon =
                  application.icon;

                return (

                  <article
                    className="application-item"
                    key={application.company}
                  >

                    <div
                      className={
                        `application-company-logo ${application.logoClass}`
                      }
                    >

                      {application.logo}

                    </div>


                    <div className="application-company-details">

                      <h3>

                        {application.company}

                      </h3>


                      <p>

                        {application.role}

                      </p>


                      <div className="application-meta">

                        <span>

                          <MapPin size={13} />

                          {application.location}

                        </span>


                        <span>

                          <CalendarDays size={13} />

                          Applied {application.appliedDate}

                        </span>

                      </div>

                    </div>


                    <div className="application-status-section">

                      <span
                        className={
                          `application-status ${application.statusClass}`
                        }
                      >

                        <StatusIcon size={13} />

                        {application.status}

                      </span>

<button
  type="button"
  className="view-details-button"
  onClick={() =>
    navigate(
      "/student/application-details",
      {
        state: {
          application: {
            company:
              application.company,

            role:
              application.role,

            status:
              application.status,

            location:
              application.location,

            package:
              application.package,

            appliedDate:
              application.appliedDate,

            logo:
              application.logo,
          },
        },
      }
    )
  }
>
  View Details

  <ArrowRight size={16} />
</button>
                    </div>

                  </article>

                );

              })}

            </div>

          </section>

        </div>

      </section>

    </main>
  );
};

export default MyApplications;