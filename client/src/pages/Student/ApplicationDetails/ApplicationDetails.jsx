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
  ArrowLeft,
  MapPin,
  IndianRupee,
  CalendarDays,
  Clock,
  CheckCircle2,
  Circle,
  Building2,
  FileCheck,
} from "lucide-react";

import { useNavigate,useLocation } from "react-router-dom";

import "./ApplicationDetails.css";

const ApplicationDetails = () => {

  const navigate = useNavigate();
  const location = useLocation();

const application =
  location.state?.application;
  if (!application) {

  return (

    <main className="application-details-page">

      <div className="application-not-found">

        <h2>
          Application not found
        </h2>

        <p>
          Please return to My Applications
          and select an application.
        </p>

        <button
          onClick={() =>
            navigate(
              "/student/applications"
            )
          }
        >

          Back to My Applications

        </button>

      </div>

    </main>

  );

}

  return (

    <main className="application-details-page">

      {/* =====================
          SIDEBAR
      ===================== */}

      <aside className="application-sidebar">

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


          <button
            className="sidebar-link active"
            onClick={() =>
              navigate("/student/applications")
            }
          >

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


      {/* =====================
          MAIN CONTENT
      ===================== */}

      <section className="application-details-main">


        {/* HEADER */}

        <header className="application-details-header">

          <div className="header-search">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search companies or roles..."
            />

          </div>


          <div className="header-actions">

          <button
  className="notification-button"
  onClick={() =>
    navigate("/student/notifications")
  }
  title="Notifications"
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

        <div className="application-details-content">


          {/* BACK BUTTON */}

          <button
            className="back-applications-button"
            onClick={() =>
              navigate("/student/applications")
            }
          >

            <ArrowLeft size={18} />

            Back to My Applications

          </button>


          {/* PAGE HEADING */}

          <section className="application-details-heading">

            <div>

              <span className="application-page-tag">

                <FileCheck size={13} />

                APPLICATION DETAILS

              </span>


              <h1>

                Software Engineer Intern

              </h1>


              <p>

                Google · Application submitted successfully

              </p>

            </div>


           <div className="application-status-badge">

  {application.status}

</div>

          </section>


          {/* APPLICATION INFORMATION */}

          <section className="application-info-grid">


            {/* LEFT SIDE */}

            <div className="application-details-card">

              <h2>

                Job Details

              </h2>


              <div className="application-company">

               <div className="application-company-logo">

  {application.logo ||
    application.company
      .charAt(0)}

</div>


                <div>

                 <h3>
  {application.company}
</h3>

<p>
  {application.role}
</p>

                </div>

              </div>


              <div className="job-details-list">


                <div>

                  <MapPin size={18} />

                  <div>

                    <span>

                      Location

                    </span>

                    <p>

                      Bangalore, India

                    </p>

                  </div>

                </div>


                <div>

                  <IndianRupee size={18} />

                  <div>

                    <span>

                      Package

                    </span>

                    <p>

                      ₹12 LPA

                    </p>

                  </div>

                </div>


                <div>

                  <BriefcaseBusiness size={18} />

                  <div>

                    <span>

                      Employment Type

                    </span>

                    <p>

                      Internship

                    </p>

                  </div>

                </div>


                <div>

                  <CalendarDays size={18} />

                  <div>

                    <span>

                      Application Deadline

                    </span>

                    <p>

                      15 Aug 2026

                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="application-summary-card">

              <h2>

                Application Summary

              </h2>


              <div className="summary-row">

                <span>

                  Application ID

                </span>

                <strong>

                  APP-2026-001

                </strong>

              </div>


              <div className="summary-row">

                <span>

                  Applied On

                </span>

                <strong>

                  30 Jul 2026

                </strong>

              </div>


              <div className="summary-row">

                <span>

                  Resume

                </span>

                <strong>

                  Renuka_Resume.pdf

                </strong>

              </div>


              <div className="summary-row">

                <span>

                  Current Status

                </span>

              <span className="review-status">

  {application.status}

</span>

              </div>

            </div>

          </section>


          {/* APPLICATION TIMELINE */}

          <section className="application-timeline-card">

            <div className="timeline-heading">

              <div>

                <h2>

                  Application Progress

                </h2>

                <p>

                  Track the current progress of your application.

                </p>

              </div>

            </div>


            <div className="application-timeline">


              <div className="timeline-item completed">

                <div className="timeline-icon">

                  <CheckCircle2 size={20} />

                </div>


                <div>

                  <h3>

                    Application Submitted

                  </h3>

                  <p>

                    Your application was submitted successfully.

                  </p>

                  <span>

                    30 Jul 2026 · 10:30 AM

                  </span>

                </div>

              </div>


              <div className="timeline-line active-line"></div>


              <div className="timeline-item current">

                <div className="timeline-icon">

                  <Clock size={20} />

                </div>


                <div>

                  <h3>

                    Application Under Review

                  </h3>

                  <p>

                    The recruiter is reviewing your profile.

                  </p>

                  <span>

                    Current stage

                  </span>

                </div>

              </div>


              <div className="timeline-line"></div>


              <div className="timeline-item">

                <div className="timeline-icon">

                  <Circle size={18} />

                </div>


                <div>

                  <h3>

                    Interview

                  </h3>

                  <p>

                    Interview details will appear here.

                  </p>

                  <span>

                    Pending

                  </span>

                </div>

              </div>


              <div className="timeline-line"></div>


              <div className="timeline-item">

                <div className="timeline-icon">

                  <Circle size={18} />

                </div>


                <div>

                  <h3>

                    Final Decision

                  </h3>

                  <p>

                    The final application result will be updated.

                  </p>

                  <span>

                    Pending

                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* HELP CARD */}

          <section className="application-help-card">

            <Building2 size={22} />


            <div>

              <h3>

                Need help with this application?

              </h3>

              <p>

                Contact your placement coordinator for application-related support.

              </p>

            </div>


            <button>

              Contact Coordinator

            </button>

          </section>

        </div>

      </section>

    </main>

  );

};

export default ApplicationDetails;